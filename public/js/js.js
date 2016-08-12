(function($, MenuData) {

    "use strict";
    var render = {};



    /**
     * render the default product-overview
     */
    render.overview = function() {
        var itemTemplate = require("../views/overview_item.mustache");

        $(document).ready(function() {
            var element = $("ul#overview");

            element.html(''); //TODO should this be done here?

            var html = itemTemplate.render({
                items: MenuData.getData(),
                five: new Array(5)
            });
            element.append(html);

        });
    };

    window.render = render;
})(
    require('jquery'),
    require('./MenuData.js')
);
