var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function EagleView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/eagle.svg',
        size: [16.398*5, 22.333*5]
    });
    this.eagleModifier = new StateModifier({
    	origin: [0,-1],
    	align: [0.75,0],
  	transform: Transform.translate(0, 0, 25)
  });
    this.add(this.eagleModifier).add(this.surface);
}

EagleView.prototype = Object.create(View.prototype);
EagleView.prototype.constructor = EagleView;

EagleView.DEFAULT_OPTIONS = {};

module.exports = EagleView;