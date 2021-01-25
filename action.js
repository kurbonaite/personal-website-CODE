//active link onclick//
$(document).ready(function(){
    $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
    });
    });

//change navigation bar color//


//navbar spalvos keitimas on scroll

var sections = jQuery('section')
  , nav = jQuery('nav')
  , nav_height = nav.outerHeight();

jQuery(window).on('scroll', function () {
  var cur_pos = jQuery(this).scrollTop();

  sections.each(function() {
    var top = jQuery(this).offset().top - nav_height,
        bottom = top + jQuery(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      jQuery(this).addClass('active');
      nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('active');
    }
  });
});


//vienu peles pasukimu i kita psl:


/*  smooth scroll, greiciausiai reiks istrinti,nereikalingas
function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;


    console.log(targetPosition);
}

smoothScroll(".about",1000);

*/