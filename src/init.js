$(document).ready(function() {
  window.dancers = [];

  const characters = ['Brook.png', 'chopper.png', 'franky.png', 'luffy.png', 'nami.png', 'robin.png', 'sanji.png', 'usopp.png', 'zoro.png'];

  $('.addDancerButton').on('click', function(event) {

    const lastCharacter = characters.pop();
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * .35,
      $('body').width() * Math.random() * .7,
      Math.random() * 1000,
      lastCharacter
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);    
  });
});

// this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) * .3) + $(window).scrollTop()) + "px");

//  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

$('.lineUp').on('click', function() {
  // var left = 500;
  var width = screen.width;
  var dancerPosition = width / window.dancers.length;
  window.dancers.forEach(function(dancer, index) {
    dancer.css({bottom: screen.height * .35, right: dancerPosition * index - 100});
  });
});


$('.random').on('click', function() {
  window.dancers.forEach(function(dancer) {
    dancer.css({bottom: $('body').height() * Math.random() * .35, right: $('body').width() * Math.random() * .7});
  });
});
// $(document).ready(function() { 
//   $('.breakDancer, .blinkyDancer, .twoStepDancer').on('click', function(event) {
//     window.dancers.forEach(function(dancer) {
//       $(dancer).animate({'margin-top': '-=100'}, 300).animate({'margin-top': '+=100'}, 300);
//       $(dancer).addClass('spin');
//     });
//   });

//   $('.breakDancer, .blinkyDancer, .twoStepDancer').on('mouseleave', function(event) {
//     window.dancers.forEach(function(dancer) {
//       $(dancer).removeClass('spin');
//     });
//   });
// });


