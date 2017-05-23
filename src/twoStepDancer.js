var TwoStepDancer = function (top, left, timeBetweenSteps) {
  // create var arg by [].slice.call(agruments);
  // Dancer.apply(this, [args])
  var args = [].slice.call(arguments);
  Dancer.apply(this, args);
};

// 

// TwoStepDancer.prototype = Object.create(Dancer.prototype);
// TwoStepDancer.prototype.constructor = TwoStepDancer
// TwoStepDancer.prototype.step = function() {
//  Dancer.prototype.step.call(this);
// this.$node.slideUp();
// this.$node.slideDown();
// };

TwoStepDancer.prototype = Object.create(Dancer.prototype);
TwoStepDancer.prototype.constructor = TwoStepDancer;
TwoStepDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.slideUp('fast').slideDown('slow').animate({
    opacity: 0.25,
    left: '+=250',
    height: 'toggle'
  }, 1000).animate({
    opacity: 0.5,
    left: '-=250',
    height: 'toggle'
  }, 1000);
  this.$node.addClass('twoStepDancer');
};