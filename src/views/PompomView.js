var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function PompomView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/hat.svg',
        size: [12.94*5, 11.05*5]
    });
    this.pompomModifier = new StateModifier({
    	origin: [-0.15,-3.55],
    	align: [0.75,0],
  	transform: Transform.translate(0, 0, 22)
  });
    this.add(this.pompomModifier).add(this.surface);
}

PompomView.prototype = Object.create(View.prototype);
PompomView.prototype.constructor = PompomView;

PompomView.DEFAULT_OPTIONS = {};

module.exports = PompomView;