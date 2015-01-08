var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function PompomView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/pomPomHat.svg',
    });
    this.add(this.surface);
}

PompomView.prototype = Object.create(View.prototype);
PompomView.prototype.constructor = PompomView;

PompomView.DEFAULT_OPTIONS = {};

module.exports = PompomView;