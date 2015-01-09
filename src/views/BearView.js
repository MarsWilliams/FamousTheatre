var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function BearView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/bear.svg',
        size: [15.171*5, 22.333*5]
    });
    this.bearModifier = new StateModifier({
    	origin: [0.5,-4.75],
    	align: [0.5,0],
  	transform: Transform.translate(0, 0, 5)
  });
    this.add(this.bearModifier).add(this.surface);
}

BearView.prototype = Object.create(View.prototype);
BearView.prototype.constructor = BearView;

BearView.DEFAULT_OPTIONS = {};

module.exports = BearView;