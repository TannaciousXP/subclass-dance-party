var BreakDancer = function(top, left, timeBetweenSteps) {
  var args = [].slice.call(arguments);
  Dancer.apply(this, args);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn('slow');
  this.$node.fadeOut('fast');
  this.$node.addClass('breakDancer');
};