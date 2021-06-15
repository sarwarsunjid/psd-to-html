$(document).ready(function() {
	//Waypoint jQuery
	/*jquerywaypoints.min.js-> file tah vendors->js e rakhte hobe
		->then script tag diye link korate hobe index.html file er niche
		->then amra js--services-section ekta class nibo jquery er jonno
		->the main.js e nicher code guli likhbo.
	*/
	$(".js--services-section").waypoint(function(direction){
		if (direction == "down") {
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});

	//Mixitup jQuery(Portfolio section)
	var mixer =mixitup('.container')

	//Smooth Scroll for IE/EDGE/SAFARI
	//this snippet will work to provide support ie/edge/safari browser.
	$('a').on('click', function(event) {
		if (this.hash !== "") { 
			event.preventDefault();
			/* Act on the event */
			var hash =this.hash;
			$('html,body').animate({scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash=hash;
			});
		}	
	});
});

function openNav() {
	document.getElementById('myNav').style.width="100%";
}

function closeNav() {
	document.getElementById('myNav').style.width="0%";
}