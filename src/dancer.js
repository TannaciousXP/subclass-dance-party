// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};

// verti = top || bottom
// hori = left || right

var Dancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype);
  
  // this.top = top;
  // this.left = left;
  // this.step();
  // this.setPosition(top, left);
  
  // getting the HTML tag with pseudoclassical 
  this.$node = $('<span class="dancer"></span>');
  
  // grab the first two arguments to invoke on newDancer obj later on
  // var positions = [].slice.call(arguments[0], arguments[2]);
  // grab the last element of arguments to call on the this.step;
  // var timeWait = [].slice.call(arguments[2])[0];
  

  // Invoke this.step.call with timeWait
  // Invoke this.setPosition.apply with positions
  // this.step.call(this, timeWait);
  // this.step.call(this, timeWait);
  
  
  // this.setPosition.apply(this, positions);
  this.timeBetweenSteps = timeBetweenSteps;   
  this.step();
  this.setPosition(top, left);
  // return this;
};

// ------- break --------

Dancer.prototype.step = function() {
  setTimeout(this.step, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};















