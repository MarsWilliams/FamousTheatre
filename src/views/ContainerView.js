var View          = require('famous/core/View');
var Surface       = require('famous/core/Surface');
var ContainerSurface = require("famous/surfaces/ContainerSurface");
var Transform     = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

function ContainerView() {
    View.apply(this, arguments);
    this.surface = new ContainerSurface({
        size: [400, 400],
        properties: {
            overflow: 'hidden'
        }
    });
    this.add(this.surface);
}

ContainerView.prototype = Object.create(View.prototype);
ContainerView.prototype.constructor = ContainerView;

ContainerView.DEFAULT_OPTIONS = {};

module.exports = ContainerView;

   