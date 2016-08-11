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

            element.html('');//TODO should this be done here?

            //items
            MenuData.getData().forEach(function(product) {
                var html = itemTemplate.render(product);
                element.append(html);
            });

        });
    };

    window.render = render;
})(
    require('jquery'),
    require('./MenuData.js')
);
