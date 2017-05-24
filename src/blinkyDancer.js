// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


/* pseudoclassical instantiation */

var BlinkyDancer = function(bottom, right, timeBetweenSteps) {
  //passing in all paramenters from makeDancer and save into var args
  var args = [].slice.call(arguments);
  Dancer.apply(this, args);
  
  
};


BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.addClass('blinkyDancer');  
  this.$node.toggle();
  $(document).ready(function() { 
    $('.breakDancer, .blinkyDancer, .twoStepDancer').on('click', function(event) {
      $(this).animate({'margin-top': '-=100'}, 300).animate({'margin-top': '+=100'}, 300);
      $(this).addClass('spin');
    });

    $('.breakDancer, .blinkyDancer, .twoStepDancer').on('mouseleave', function(event) {
      $(this).removeClass('spin');
    });
  });
};

