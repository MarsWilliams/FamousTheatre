var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ImageSurface  = require('famous/surfaces/ImageSurface');
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function ContainerView() {
    View.apply(this, arguments);
    this.surface = new ImageSurface({
        content: 'images/bear.svg',
    });
    this.add(this.surface);
}

ContainerView.prototype = Object.create(View.prototype);
ContainerView.prototype.constructor = ContainerView;

ContainerView.DEFAULT_OPTIONS = {};

module.exports = ContainerView;