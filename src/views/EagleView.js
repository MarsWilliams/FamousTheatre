var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function EagleView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/eagle.svg',
    });
    this.add(this.surface);
}

EagleView.prototype = Object.create(View.prototype);
EagleView.prototype.constructor = EagleView;

EagleView.DEFAULT_OPTIONS = {};

module.exports = EagleView;