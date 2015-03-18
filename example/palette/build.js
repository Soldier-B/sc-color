
// start with JSON colors
// generate template data
// render page


var fs          = require("fs"),
    _           = require("underscore"),
    handlebars  = require("handlebars"),
    sccolor     = require("../..");

var input = {
    colors : [
        "#0060a2",
        "#ffce00",
        "#00d7e7",
    ],
};

var data = {
    tints    : [],
    tones    : [],
    shades   : [],
    hue_sets : [],
};


_.each(input.colors, function(color) {
    _.each(["tint", "tone", "shade"], function(verb) {    
        var r = [];
        for (var i = 0; i <= 1.0; i += 0.1) {
            var c = sccolor(color)[verb](i).html();
            r.push(c);
        }
        data[verb + "s"].push(r);
    });

    data.hue_sets.push( _.map(sccolor(color).hueSet(), function(c) {
        return c.html();
    }));
});


var templateSource = fs.readFileSync("index.hb.html", "utf8");
var template = handlebars.compile(templateSource);
var output = template(data);

fs.writeFileSync("index.html", output);
fs.writeFileSync("surfacecurve-color.js", fs.readFileSync("../../lib/surfacecurve-color.js"));

console.log("Done.")