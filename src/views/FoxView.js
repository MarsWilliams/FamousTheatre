var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');


function FoxView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/fox.svg',
        size: [20.813*5, 22.333*5]
    });
    this.foxModifier = new StateModifier({
    	origin: [1.5,-4.5],
    	align: [0.5,0],
  	transform: Transform.translate(0, 0, 5)
  });
    this.add(this.foxModifier).add(this.surface);
}

FoxView.prototype = Object.create(View.prototype);
FoxView.prototype.constructor = FoxView;

FoxView.DEFAULT_OPTIONS = {};

module.exports = FoxView;