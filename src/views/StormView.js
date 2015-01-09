var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');


function StormView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/cloud.svg',
        size: [42.497*5, 7.68*5],
    });
    this.stormModifier = new StateModifier({
    	 origin: [0,-11.5],
    	align: [0.5,0],
  	transform: Transform.translate(0, 0, -6)
  });
    this.add(this.stormModifier).add(this.surface);
}

StormView.prototype = Object.create(View.prototype);
StormView.prototype.constructor = StormView;

StormView.DEFAULT_OPTIONS = {};

module.exports = StormView;