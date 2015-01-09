var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function FrameView() {
	View.apply(this, arguments);
	this.surface = new ImageSurface({
        content: 'images/winterframe.svg',
        // size: [103.598 * 10, 145.273 * 10]
         size: [225.099*5, 145.273*5]
    });
    this.frameModifier = new StateModifier({
    	origin: [0.5,0],
    	align: [0.5,0],
  		transform: Transform.translate(0, 0, 20)
  	});
	this.add(this.frameModifier).add(this.surface);

}

FrameView.prototype = Object.create(View.prototype);
FrameView.prototype.constructor = FrameView;

FrameView.DEFAULT_OPTIONS = {};

module.exports = FrameView;