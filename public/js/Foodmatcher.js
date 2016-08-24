module.exports = (function(MenuData, _, template, templateWinner, $) {

    var $main = null;

    function Foodmatcher() {
        $main = $('main');
        this.items = _.clone(MenuData.getData());
        var id = 0;
        this.items.forEach(function(item) {
            item.id = id;
            id++;
            item.cutOut = false;
        });

        this.currentMatch = null;
    }

    Foodmatcher.prototype = {
        get2Items: function() {
            var ret = [];
            var s = _.shuffle(this.items);
            while (ret.length < 2 && s.length > 0) {
                var item = s.pop();
                if (!item.cutOut) {
                    ret.push(item);
                }
            }
            return ret;
        },

        renderMatch: function() {
            var items = this.get2Items();
            this.currentMatch = items;
            var html = template.render({
                items: items,
                five: new Array(5)
            });
            $main.html(html);
        },

        selectWinner: function(winnerID) {
            var loserID = this.currentMatch[0].id;
            if (loserID == winnerID) loserID = this.currentMatch[1].id;

            this.items.forEach(function(item) {
                if (item.id == loserID) {
                    item.cutOut = true;
                }
            });

            if (this.get2Items().length == 2) {
                this.renderMatch();
            } else {
                //done, find the winner
                var winner;
                this.items.forEach(function(item) {
                    if (!item.cutOut) winner = item;
                });
                console.log('winner: ');
                console.dir(winner);
                this.renderWinner(winner);
            }
        },

        renderWinner: function(winnerItem) {
            $('nav').first().show();
            var html = templateWinner.render({
                items: [winnerItem],
                five: new Array(5)
            });
            $main.html(html);
        }
    };

    return Foodmatcher;

})(
    require('./MenuData.js'),
    require('lodash'),
    require("../views/foodmatcher.mustache"),
    require("../views/foodmatcher_winner.mustache"),
    require('jquery')
);
