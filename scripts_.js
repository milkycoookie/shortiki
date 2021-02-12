

var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	pagination: {
		el: 'null',
		clickable: true,
	},
	hashNavigation: {
    replaceState: true,
	},
	fadeEffect: {
    crossFade: true
  },
});


var currentVideo = window.location.hash.substr(1);


swiper.on('slideNextTransitionEnd', function () {
	$(".playpause").fadeIn();
	$mq.marquee('toggle');
	$("." + currentVideo).get(0).pause();
	currentVideo++;
});

swiper.on('slidePrevTransitionEnd', function () {
	$(".playpause").fadeIn();
	$mq.marquee('toggle');
	$("." + currentVideo).get(0).pause();
	currentVideo--;
});




$( document ).ready(function() {

	$mq.marquee('toggle');

});


var $mq = $('.marquee').marquee({
	gap: 30,
	delayBeforeStart: 0,
	duration: 3000,
	startVisible: true,
	duplicated: true
}
);

//Pause
$('.t').click(function(){
  $mq.marquee('toggle');
});




$('.video_').parent().click(function () {

	var $rota = $('.musicball_'),
	degree = 0,
	clicked = false;	

  if($(this).children(".video_").get(0).paused){ 

		$(this).children(".video_").get(0).play();   
		$(this).children(".playpause").fadeOut();
	//	Playnow();
		
		
  } else {       

			$(this).children(".video_").get(0).pause();
			$(this).children(".playpause").fadeIn();
		//Stopnow();
		}


});



// function Playnow (){
// 	document.getElementsByClassName("mymarquee").start();
// };

// function Stopnow (){
// 	document.getElementById('mymarquee').stop();
// };


