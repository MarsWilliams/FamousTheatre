var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function CloudView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/cloud.svg',
        classes: ['cloudOpacity'],
    });
    this.add(this.surface);
}

CloudView.prototype = Object.create(View.prototype);
CloudView.prototype.constructor = CloudView;

CloudView.DEFAULT_OPTIONS = {};

module.exports = CloudView;