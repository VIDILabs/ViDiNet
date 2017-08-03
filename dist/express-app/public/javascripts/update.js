'use strict';

/**
 * Created by keshavdasu on 8/3/17.
 */
//Sends the current index of the tab selected
//The response is the preview template html recompiled with data for that tab.

//Initialize page
$.ajax({
    type: 'POST',
    data: { id: 0 },
    dataType: 'json',
    url: '/ajax',
    success: function success(response) {
        console.log(response["data"]);
        var html = response["data"];
        $("#preview").html(html);
    }
});

function updatePreview(div_id) {
    $.ajax({
        type: 'POST',
        data: { id: div_id },
        dataType: 'json',
        url: '/ajax',
        success: function success(response) {
            console.log(response["data"]);
            var html = response["data"];
            $("#preview").html(html);
        }
    });
}
//# sourceMappingURL=update.js.map