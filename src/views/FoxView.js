var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function FoxView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/fox.svg',
    });
    this.add(this.surface);
}

FoxView.prototype = Object.create(View.prototype);
FoxView.prototype.constructor = FoxView;

FoxView.DEFAULT_OPTIONS = {};

module.exports = FoxView;