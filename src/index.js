// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var FlexibleLayout = require('famous/views/FlexibleLayout');


// create the main context
var mainContext = Engine.createContext();

// your app here
var frame = new ImageSurface({
  content: 'images/winterframe.svg',
  classes: ['backfaceVisibility']
});
var ground = new ImageSurface({
  content: 'images/ground.svg',
  classes: ['backfaceVisibility'],
});
var mountain = new ImageSurface({
  content: 'images/mountain.svg',
  classes: ['backfaceVisibility'],
});
var cloud = new ImageSurface({
  content: 'images/cloud.svg',
  classes: ['backfaceVisibility'],
});
var snowflake = new ImageSurface({
  content: 'images/snowflake.svg',
  classes: ['backfaceVisibility'],
});
var bear = new ImageSurface({
  content: 'images/bear.svg',
  classes: ['backfaceVisibility'],
});
var fox = new ImageSurface({
  content: 'images/fox.svg',
  classes: ['backfaceVisibility'],
});
var eagle = new ImageSurface({
  content: 'images/eagle.svg',
  classes: ['backfaceVisibility'],
});
// 17.554 px (pompom) : 19.646 px (earflap) : 
// var ratios = [145.273 (frame): 48.028 (mountain) : 45.556 px (ground) : 7.747 px (cloud) : 4.778 px (snowflake) : 22.333 px (bear) : 22.333 px (fox) : 22.333 px (eagle)];
var ratios = [145.273, 48.028, 45.556, 7.747, 4.778, 22.333, 22.333, 22.333];
var surfaces = [frame, ground, mountain, cloud, snowflake, bear, fox, eagle];
var layout = new FlexibleLayout({
    direction: FlexibleLayout.DIRECTION_Y,
    ratios: ratios
});

var initialTime = Date.now();
// var centerSpinModifier = new Modifier({
//   align: [0.5, 0.5],
//   origin: [0.5, 0.5],
//   transform: function() {
//     return Transform.rotateY(.002 * (Date.now() - initialTime));
//   }
// });

// mainContext.add(centerSpinModifier).add(logo);
// mainContext.add(frame);
// mainContext.add(ground);
// mainContext.add(mountain);
// mainContext.add(cloud);
// mainContext.add(snowflake);
// mainContext.add(bear);
// mainContext.add(fox);
// mainContext.add(eagle);
layout.sequenceFrom(surfaces);

mainContext.add(layout);
