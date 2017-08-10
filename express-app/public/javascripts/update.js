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
    }
});


function updatePreview(div_id){
    $.ajax({
        type : 'POST',
        data: {id: div_id},
        dataType : 'json',
        url: '/ajax',
        success : function(response) {
            var html = response["data"];
            $("#preview").html(html);
        }
    });
}



function openApplication(aName){
    $('#launch-btn').prop('disabled', true);
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
