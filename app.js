$(document).ready(function() {

	var numSlides = 4;
	slideshow(6000,numSlides);
	

	$('.circle').each(function(n){

			$(this).click(function(){
				$('.circle').removeClass('activecircle');
				$(this).addClass('activecircle');
				var elm = $(this).index();
				console.log(elm)
				clearInterval(timer);
				intervalOnClick(elm,numSlides);
			});
			
	});
	function slideshow(t,numSlides){
		 timer = setInterval(function(){ activateSlide(numSlides); },t);
	}

	function activateSlide(numSlides){
		numSlides = numSlides -1;
		var activeSlide = $('.activecircle').index();
		console.log('active ='+activeSlide);
		if(activeSlide == numSlides){
			//on slide 4
			$('.slide').eq(numSlides).fadeOut(2000);
			$('.slide').eq(0).delay(400).fadeIn(2000);
			$('.circle').eq(3).delay(3000).removeClass('activecircle');
			$('.circle').eq(0).delay(5000).addClass('activecircle');
			
		}
		else{
			
			$('.slide').eq(activeSlide).fadeOut(2000);
			$('.slide').eq(activeSlide + 1).delay(400).fadeIn(2000);
			$('.circle').eq(activeSlide).delay(4000).removeClass('activecircle');
			$('.circle').eq(activeSlide + 1).delay(5000).addClass('activecircle');

		}
	}

	function intervalOnClick(elm,numSlides){

		$('.slide').fadeOut(2000);
		$('.slide').eq(elm).fadeIn(2000);
		$('.circle').removeClass('activecircle');
		$('.circle').eq(elm).addClass('activecircle');

		slideshow(6000,numSlides);

	}

});