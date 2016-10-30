"use strict";

$(function () {

    $("#topic_title").autocomplete({
        source: "/path/to/ajax_autocomplete.php",
        minLength: 2,
        select: function select(event, ui) {
            var url = ui.item.id;
            if (url != '#') {
                location.href = '/blog/' + url;
            }
        },

        html: true });
});