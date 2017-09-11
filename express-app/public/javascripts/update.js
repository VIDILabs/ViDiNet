/**
 * Created by keshavdasu on 8/3/17.
 */
//Sends the current index of the tab selected
//The response is the preview template html recompiled with data for that tab.

//Initialize page
$.ajax({
    type : 'POST',
    data: {id: 0},
    dataType : 'json',
    url: '/ajax',
    success : function(response) {
        var html = response["data"];
        $("#preview").html(html);
        $("#lib-icons-0").addClass("active");
    }
});


function setActive(div_id, length){

    var tag = "#lib-icons-" + div_id.toString();
    var i = 0;

    console.log(length);
    for(i = 0; i < length; i++) {
        var div = "#lib-icons-" + i.toString();
        $(div).removeClass("active");
    }

    $(tag).addClass("active");
}

function updatePreview(div_id){
    $.ajax({
        type : 'POST',
        data: {id: div_id},
        dataType : 'json',
        url: '/ajax',
        success : function(response) {
            var html = response["data"];
            var length = response["dataLength"];
            $("#preview").html(html);

            setActive(div_id, length);
        }
    });
}



function openApplication(aName){
    // $('#launch-btn').prop('disabled', true);
    $.ajax({
        type : 'POST',
        data: { application: aName},
        dataType : 'json',
        url: '/open-app',
        success : function(response) {
            console.log("Request sent to open app...");
            console.log(response["data"]);
        }
    });
}
