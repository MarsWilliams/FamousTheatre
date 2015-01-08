var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function GroundView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/ground.svg',
    });
    this.add(this.surface);
}

GroundView.prototype = Object.create(View.prototype);
GroundView.prototype.constructor = GroundView;

GroundView.DEFAULT_OPTIONS = {};

module.exports = GroundView;