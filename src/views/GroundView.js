var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');


// var groundModifier = new StateModifier({
//   transform: Transform.translate(4.432, 53.267, 0)
// });

function GroundView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/ground.svg',
        size: [158.55*5, 76.295*5]
    });
    this.groundModifier = new StateModifier({
    	origin: [0.5,-0.85],
    	align: [0.59,0],
  	transform: Transform.translate(0, 0, -5)
  	});
  	// this.ground.on('click', function(){
  	// 	this.walk(false);
  	// }.bind(this));
    this.add(this.groundModifier).add(this.surface);
}

GroundView.prototype = Object.create(View.prototype);
GroundView.prototype.constructor = GroundView;

GroundView.DEFAULT_OPTIONS = {};

module.exports = GroundView;

function walk(){
  Transform.translate(0, 300, 0),
  { duration : 8000, curve: 'linear'}
};