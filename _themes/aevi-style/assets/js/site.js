$(function() {

	// patch the table styles
	$("table").each(function() {
		$(this).addClass("table");
	});

	$(".alert").each(function(){
		$(this).addClass("alert-info");
	});

	// Show or hide the sticky go to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})

    $('.menu-toggle > button').on('click', function() {
        $('.sidebar').toggleClass('closed');
    });
});