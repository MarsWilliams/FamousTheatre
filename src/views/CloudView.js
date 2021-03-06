var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');


function CloudView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/cloud.svg',
        size: [42.497*5, 7.68*5],
    });
    this.cloudModifier = new StateModifier({
    	 origin: [0.85,-10.5],
    	align: [0.5,0],
  	transform: Transform.translate(0, 0, 5)
  });
    this.add(this.cloudModifier).add(this.surface);
}

CloudView.prototype = Object.create(View.prototype);
CloudView.prototype.constructor = CloudView;

CloudView.DEFAULT_OPTIONS = {};

module.exports = CloudView;