// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');
var ImageSurface = require('famous/surfaces/ImageSurface');
var FlexibleLayout = require('famous/views/FlexibleLayout');

var FrameView = require('./views/FrameView');
var ContainerView = require('./views/ContainerView');
var GroundView = require('./views/GroundView');
var CloudView = require('./views/CloudView');
var SnowflakeView = require('./views/SnowflakeView');
var BearView = require('./views/BearView');
var FoxView = require('./views/FoxView');
var EagleView = require('./views/EagleView');
var PompomView = require('./views/PompomView');


// create the main context
var mainContext = Engine.createContext();

// var ratios = [145.273 (frame): 48.028 (mountain) : 76.295 px (ground) : 7.747 px (cloud) : 4.778 px (snowflake) : 22.333 px (bear) : 22.333 px (fox) : 22.333 px (eagle) : 11.05 (pompom)];
var frame = new FrameView();
var ground = new GroundView();
var cloud = new CloudView();
var snowflake = new SnowflakeView();
var bear = new BearView();
var fox = new FoxView();
var eagle = new EagleView();
var pompom = new PompomView();
var ratios = [145.273, 76.295, 7.747, 4.778, 22.333, 22.333, 22.333, 11.05];
var views = [frame, ground, cloud, snowflake, bear, fox, eagle, pompom];
var layout = new FlexibleLayout({
    direction: FlexibleLayout.DIRECTION_Y,
    ratios: ratios
});

var initialTime = Date.now();

layout.sequenceFrom(views);

mainContext.add(layout);
