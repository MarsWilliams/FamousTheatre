var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function SnowflakeView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/snowflake.svg',
        classes: ['snowflakeBlur'],
    });
    // surface.setContent = ("http://www.zachstronaut.com/winternetizer/");
    this.add(this.surface);
}

SnowflakeView.prototype = Object.create(View.prototype);
SnowflakeView.prototype.constructor = SnowflakeView;

SnowflakeView.DEFAULT_OPTIONS = {};

module.exports = SnowflakeView;