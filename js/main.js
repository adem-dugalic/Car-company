var fade = document.getElementById('top');

window.addEventListener('scroll', function(){
	if(window.screen.width<760){

	}else{
		fade.style.opacity = 1- +window.pageYOffset/550+'';
	fade.style.top = +window.pageYOffset+'px';
	fade.style.backgroundPositionY = - +window.pageYOffset/2+'px';
	}
	
});


var menu = document.querySelector('.menu');
var nav = document.querySelector('.links');
var navLinks = document.querySelectorAll('.links li');

menu.addEventListener('click', function(){

	nav.classList.toggle('navigation-active');
	navLinks.forEach((link,index)=>{
		if(link.style.animation){
		link.style.animation = '';
		}else{
			link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
		}
	});

	menu.classList.toggle('toggle');

});

	function playy(){
    document.getElementById("player").play();
	}
	var start = document.getElementById('play');
	start.addEventListener('click',playy)



