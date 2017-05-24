var BreakDancer = function(bottom, right, timeBetweenSteps) {
  var args = [].slice.call(arguments);
  Dancer.apply(this, args);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn('fast');
  this.$node.fadeOut('fast');
  
  this.$node.addClass('breakDancer');
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