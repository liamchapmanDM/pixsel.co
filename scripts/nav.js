$(function() {
    if ($(document).scrollTop() >= 100) {
      $('nav').addClass('solid-bg')
    } else {
      $('nav').removeClass('solid-bg')
    }

    setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.
    
});
  
  
  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $('nav').addClass('solid-bg')
    } else {
      $('nav').removeClass('solid-bg')
    }
  });
  
  $('.nav-btn').click(function() {
    $('.nav').toggleClass('active-nav');
  });
  

function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}