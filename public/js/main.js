(function($, MenuData) {
    "use strict";

    var settings = {
        defaultRoute: 'overview'
    };
    var self = {};

    var render = {};

    window.app = {};
    window.app.init = function() {
        self.main = $('main');
        $(document).ready(function() {
            var hash = window.location.hash || settings.defaultRoute;
            if(hash.charAt(0)=='#'){
              hash = hash.substr(1);
            }
            window.goto(hash);
        });
    };


    /**
     * render the default product-overview
     */
    render.overview = function() {
        var itemTemplate = require("../views/overview.mustache");
        var html = itemTemplate.render({
            items: MenuData.getData(),
            five: new Array(5)
        });
        self.main.append(html);
    };

    render.foodmatcher = function() {
        var template = require("../views/foodmatcher.mustache");
        var html = template.render({
            items: MenuData.getData(),
            five: new Array(5)
        });
        self.main.append(html);

    };

    /**
     * render a new route
     * @param  {string} path
     */
    window.goto = function(path) {
        console.log('goto(' + path + ')');
        if (!render[path]) {
            console.error('path (' + path + ') not available');
            alert('ERROR 3l2fh34fkh');
        } else {
          self.main.html('');
            $('body').attr('route', path);
            window.location.hash=path;
            render[path]();
        }
    };

    window.render = render;
})(
    require('jquery'),
    require('./MenuData.js')
);
