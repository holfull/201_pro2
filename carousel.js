// $ means JQuery.
// From the slick website, manipulated to adjust the number of images shown and the soeed of the autoplay. Added the dots and arrows + centerMode.

$(function () {
	$("#carousel").slick({
		arrows: true,
		dots: true,
		
	});
});


$(function () {
	
$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,

 
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
});
	
	
	