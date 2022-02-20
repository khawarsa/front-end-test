function carouselHeight() {
  var maxHeight = $('.carousel-focus-item:nth-of-type(2)').outerHeight()
  $('.carousel-focus-inner').css('height', maxHeight);
}

$(document).ready(function() {
  carouselHeight();
})

$(window).resize(function () { 
  carouselHeight();
});

$(document).on('click', '.carousel-focus-controls > .prev', function() {
	$(this).closest('.carousel-focus-inner').find('.carousel-focus-item ').first().hide().appendTo('.carousel-focus-items').show();
	$('.carousel-focus-item iframe').detach();
	getThumbnail()
});

$(document).on('click', '.carousel-focus-controls > .next', function() {
	$(this).closest('.carousel-focus-inner').find('.carousel-focus-item ').last().hide().prependTo('.carousel-focus-items').show();
	$('.carousel-focus-item iframe').detach();
	getThumbnail()
});

$(document).on('click', '.carousel-focus-item:nth-of-type(1) img', function() {
	$(this).closest('.carousel-focus-item ').insertAfter('.carousel-focus-item:nth-of-type(2)');
});

$(document).on('click', '.carousel-focus-item:nth-of-type(3) img', function() {
	$(this).closest('.carousel-focus-item ').insertBefore('.carousel-focus-item:nth-of-type(2)');
});