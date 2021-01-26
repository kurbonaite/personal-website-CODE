//active link onclick//
/*
$(document).ready(function(){
    $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
    });
    });
*/
  
//navbar spalvos keitimas on scroll, on click iki 55/67 eilutes imtinai

// Basice Code keep it 
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

// Use Your Class or ID For Selection 

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
    
  });
}

  //change navigation bar color, man atrodo, akd kazkokiu budu padaro active MY STORY nuo portfolio//
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 2120) {
        $("#menu li a").addClass('nav-scrolled') //&& $("#menu li a").addClass('active') ;
      }
  
      else{
        $("#menu li a").removeClass('nav-scrolled');  	
      }
    })
  })

    
//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition


//--- START NAV-ITEM CLICK EVENTS ---//
// when the user clicks a nav item:
$("#leftSidebar ul li a").click(function (e) {

  e.preventDefault(); // don't jump like a typical html anchor

  // find the index of the "#" character in the href string...
  var startOfName = $(this).attr('href').indexOf("#"),
      // ...then use it as the argument in the slice() method (add 1 so you don't include the # character).
      clickRef = $(this).attr('href').slice(startOfName + 1),
      targetEl = $('a[name=' + clickRef + ']'); // select the element this link is pointing to

  // scroll there smoothly:
  scrollThere(targetEl, 400);

}); // end click
//--- END NAV-ITEM CLICK EVENTS ---//


//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function(e) {

  // get Y-axis value of each div:
  var div1y = $('#main').offset().top,
      div2y = $('#mystory').offset().top,
      div3y = $('#skills').offset().top,
      div4y = $('#portfolio').offset().top,
      div5y = $('#contact').offset().top,
            // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;

  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if

  // prevent default behavior (page scroll):
  e.preventDefault();

  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#main');
    targetDown = $('#mystory');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#main');
    targetDown = $('#skills');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#mystory');
    targetDown = $('#portfolio');
  } else if (lastScrollTop === div4y) {
    targetUp = $('#skills');
    targetDown = $('#contact');
  } else if (lastScrollTop === div5y) {
    targetUp = $('#portfolio');
    targetDown = $('#contact');
  } else if (lastScrollTop < div2y) {
    targetUp = $('#main');
    targetDown = $('#mystory');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#mystory');
    targetDown = $('#skills');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#skills');
    targetDown = $('#portfolio');
  } else if (lastScrollTop < div5y) {
    targetUp = $('#portfolio');
    targetDown = $('#contact');
  } else if (lastScrollTop > div5y) {
    targetUp = $('#contact');
    targetDown = $('#contact');
  } // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 200);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//



/*
    //navbar spalvos keitimas on scroll.sita reiks istrint,nes virsutinis labiau veikia

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






$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 2120) {
	    $("li a").css("color" , "#d1d1d1");
	  }

	  else{
		  $("li a").css("color" , "#44565b");  	
	  }
  })
})


//vienu peles pasukimu i kita psl:



/*
 //smooth scroll, greiciausiai reiks istrinti,nereikalingas
function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;


    console.log(targetPosition);
}

smoothScroll(".portfolio",1000);

*/