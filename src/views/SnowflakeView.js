var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var flakeModifier = new StateModifier({
  origin: [0.5, 0.5],
  align: [0.5, 0.5]
});

function SnowflakeView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/snowflake.svg',
        size: [4.484 * 5, 4.778 * 5]
    });
    this.flakeModifier = new StateModifier({
    	origin: [0.5,0],
    	align: [0.5,0],
  	transform: Transform.translate(0, 0, 22)
  });
    // surface.setContent = ("http://www.zachstronaut.com/winternetizer/");
    this.add(flakeModifier).add(this.surface);
}

SnowflakeView.prototype = Object.create(View.prototype);
SnowflakeView.prototype.constructor = SnowflakeView;

SnowflakeView.DEFAULT_OPTIONS = {};

module.exports = SnowflakeView;