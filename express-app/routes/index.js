var express = require('express');
var router = express.Router();
var hbs = require('hbs');
var fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}


/* GET home page. */

//Initialize library with config file, and set default preview to first in config
router.get('/', function(req, res, next) {
    var library = require('../public/config/config');
    res.locals = {
        libraryContent: library
    };
    res.render('index');
});

router.post('/ajax', function(req, res) {
    var library = require('../public/config/config');
    if(req.xhr || req.accepts('json,html')==='json'){
        readModuleFile('../views/partials/preview', function (err, source) {
            var id = parseInt(req.body["id"]);
            var template = hbs.compile(source);
            var result = template(library[id]);

            //have the template source (words) ... so now just compile it with data?
            res.json({success: true , data :result , dataLength: library.length});
        });
    } else {
        res.redirect(303, '/ajax');
    }
});


function findObjectWithValue(dict,value){
    for(i = 0; i < dict.length; i++){
        var title = dict[i]["title"];
        if(title === value){
            return dict[i];
        }
    }
    return null;
}

router.post('/open-app',function(req,res){
    var library = require('../public/config/config');
    if(req.xhr || req.accepts('json,html')==='json'){
        //Send the request to open the current application
        var aName = req.body["application"];
        var current_app = findObjectWithValue(library,aName);
        var status = "failed couldn't find corresponding app in config";
        if(current_app){
            var message = current_app["script-name"] + "::" + current_app["path"] + "::" + current_app["url"];
            status = "Success";
            process.send(message);
        }
        res.json({success: true, data: status}); //For debugging
    } else {
        res.redirect(303, '/ajax');
    }
});

module.exports = router;
