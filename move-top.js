// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 20) {
        // If page is scrolled more than 50px      
        $('#toTop').fadeIn(200);
        // Fade in the arrow
    } else {
        $('#toTop').fadeOut(200);
    }
    // Else fade out the arrow
});
$('#toTop').click(function() {
    // When arrow is clicked   
    $('html, body').animate({
        scrollTop: 0
            // Scroll to top of body                 
    }, 500);
});