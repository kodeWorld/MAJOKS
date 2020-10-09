// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 20) {  
    // If page is scrolled more than 50px      
      $('#go-top').fadeIn(200);   
       // Fade in the arrow
  } else {
      $('#go-top').fadeOut(200);  
  }
   // Else fade out the arrow
});
$('#go-top').click(function() {  
   // When arrow is clicked   
  $('html, body').animate({
      scrollTop : 0      
      // Scroll to top of body                 
  }, 500);
});