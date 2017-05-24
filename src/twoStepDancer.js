var TwoStepDancer = function (bottom, right, timeBetweenSteps) {
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
  // console.log(this);
  this.$node.slideDown().animate({
    left: '-=100'
  }, 500).animate({
    left: '+=100'
  }, 500);
  this.$node.addClass('twoStepDancer');
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

