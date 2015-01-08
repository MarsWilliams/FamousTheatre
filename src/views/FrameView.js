var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function FrameView() {
	View.apply(this, arguments);
	this.surface = new ImageSurface({
        content: 'images/winterframe.svg',
    });
	this.add(this.surface);
}

FrameView.prototype = Object.create(View.prototype);
FrameView.prototype.constructor = FrameView;

FrameView.DEFAULT_OPTIONS = {};

module.exports = FrameView;