/**
 * this is an example datasheet for a menu-card
 */
module.exports = (function() {


    /**
     * TODO replace with real data
     * @private
     */
    var _data = [{
        "title": "Herzhafte Knödel",
        "description": "Hausgemachte leckere Knödel",
        "image": "knoedel.jpg",
        "price": "3.50",
        "rating":80,
        "tags": [
            "Kartoffeln",
            "Mehl",
            "Butter",
            "Eigelb",
            "Salz",
            "Muskat"
        ]
    }, {
        "title": "Herzhafte Spätzle",
        "description": "Hausgemachte geschabte Spätzle",
        "image": "spaetzle.jpg",
        "price": "3.50",
        "rating":100,
        "tags": [
            "Mehl",
            "Butter",
            "Eigelb",
            "Salz",
            "Milch"
        ]
    }, {
        "title": "Schnitzel",
        "description": "Original Wiener Schnitzel",
        "image": "schnitzel.jpg",
        "price": "7",
        "rating": 80,
        "tags": [
            "Kalb", "Paniermehl", "Ei", "Semmelbrösel"
        ]
    }, {
        "title": "Pommes",
        "description": "Pommes Frites aus der Friteuse",
        "image": "pommes.jpg",
        "price": "3.50",
        "rating": 80,
        "tags": [
            "Kartoffel", "Salz", "Fett", "Paprikapulver"
        ]
    }, {
        "title": "Kroketten",
        "description": "Leckere Backofen Kroketten",
        "image": "kroketten.jpg",
        "price": "3.50",
        "rating": 70,
        "tags": [
            "Kartoffel", "Salz", "Ei", "Paniermehl"
        ]
    }, {
        "title": "Schweinebraten",
        "description": "Schweinebraten nach altem Bayerischen Rezept",
        "image": "schweinebraten.jpg",
        "price": "10",
        "rating": 90,
        "tags": [
            "Schweinefleisch", "Öl", "Salz", "Pfeffer"
        ]
    }, {
        "title": "Haxen",
        "description": "Schweinehaxen nach altem Bayerischen Rezept",
        "image": "haxen.jpg",
        "price": "10",
        "rating": 40,
        "tags": [
            "Schweinefleisch", "Öl", "Salz", "Pfeffer"
        ]
    }, {
        "title": "Rinderbraten",
        "description": "Herzhafter Rinderbraten",
        "image": "rinderbraten.jpg",
        "price": "10",
        "rating": 35,
        "tags": [
            "Rindfleisch", "Öl", "Salz", "Pfeffer"
        ]
    }, {
        "title": "Käsespätzle",
        "description": "Die klassischen schwäbischen Käsespätzle",
        "image": "kaesespaetzle.jpg",
        "price": "7",
        "rating": 80,
        "tags": [
            "Käse", "Mehl",
            "Butter",
            "Eigelb",
            "Salz",
            "Milch"
        ]
    }, {
        "title": "Reis",
        "description": "Langkornreis als Beilage",
        "image": "reis.jpg",
        "price": "3.50",
        "rating": 67,
        "tags": [
            "Reis", "Salz"
        ]
    }, {
        "title": "Sauerbraten",
        "description": "Herzhafter Sauerbraten",
        "image": "sauerbraten.jpg",
        "price": "10",
        "rating": 46,
        "tags": [
            "Rindfleisch", "Öl", "Salz", "Pfeffer", "Rotwein"
        ]
    }, {
        "title": "Zwiebelrostbraten",
        "description": "Langsam gebratener Bayerischer Zwieblrostbraten",
        "image": "zwiebelrostbraten.jpg",
        "price": "10",
        "rating": 67,
        "tags": [
            "Schweinefleisch", "Öl", "Salz", "Pfeffer", "Zwiebel"
        ]
    }, {
        "title": "Rouladen",
        "description": "Herzhaft schmackhafte Rouladen",
        "image": "rouladen.jpg",
        "price": "10",
        "rating": 100,
        "tags": [
            "Speck", "Rindfleisch", "Senf", "Öl", "Salz", "Pfeffer", "Essiggurke"
        ]
    }, {
        "title": "Bratwurst",
        "description": "Echte Thüringer Bratwürste",
        "image": "bratwurst.jpg",
        "price": "7",
        "rating": 50,
        "tags": [
            "Schweinswurst"
        ]
    }, {
        "title": "Kratoffelsalat",
        "description": "Kartoffelsalat mit Essig",
        "image": "kartoffelsalat.jpg",
        "price": "3.50",
        "rating": 10,
        "tags": [
            "Kartoffel", "Essig", "Essiggurke", "Zwiebel"
        ]
    }, {
        "title": "Leberkäse",
        "description": "Leckerer Leberkäse aus dem Ofen",
        "image": "leberkaese.jpg",
        "price": "7",
        "rating": 100,
        "tags": [
            "Leberkäse", "Salz", "Pfeffer"
        ]
    }, {
        "title": "Schweinelende",
        "description": "Wundervoll herzhafte Schweinelende",
        "image": "schweinelende.jpg",
        "price": "10",
        "rating": 47,
        "tags": [
            "Schweinefleisch", "Öl", "Salz", "Pfeffer"
        ]
    }, {
        "title": "Burgunderbraten",
        "description": "Leckerer Burgunderbraten nach altem Hausrezept",
        "image": "burgunderbraten.png",
        "price": "10",
        "rating": 81,
        "tags": [
            "Rindfleisch", "Zwiebel", "Salz", "Pfeffer", "Öl", "Rotwein"
        ]
    }, {
        "title": "Brathähnchen",
        "description": "Knuspriges Brathähnchen",
        "image": "haendle.jpg",
        "price": "10",
        "rating": 32,
        "tags": [
            "Hühnchen", "Fett", "Salz", "Pfeffer"
        ]
    }, {
        "title": "Schaschlik",
        "description": "Herzhaft würziges Schaschlik",
        "image": "schaschlik.png",
        "price": "10",
        "rating": 59,
        "tags": [
            "Schweinefleisch", "Rindfleisch", "Leber", "Paprika", "Zwiebel", "Speck"
        ]
    }];

    var exports = {};

    exports.getData = function() {
        return _data;
    };

    return exports;

})();
