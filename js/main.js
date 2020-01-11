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
    document.location.href = "index.html";
	}
	var start = document.getElementById('play');
	start.addEventListener('click',playy)

/*models*/

var ColorX = 0;
var type = 0;

var img = document.getElementById("mX");
var modelX = document.getElementById("X");
var modelXl = document.getElementById("XL");
var modelXs = document.getElementById("XS");
var contact = document.getElementById("Contact");

var black = document.getElementById("black");
var blue = document.getElementById("blue");
var red = document.getElementById("red");
var defaul = document.getElementById("default");

var type1 = document.getElementById("type1");
var type2 =document.getElementById("type2");

var price = document.getElementById("price");

black.addEventListener('click', function(){
	if(type){
		img.src = "img/model3matteT.png";
	}else{
		img.src = "img/model3matte.png";
	}
	
	ColorX = 500;
	price.innerHTML = ((ColorX+type)+35000)+"$";
});
red.addEventListener('click', function(){
	if(type){
		img.src = "img/model3redT.png";
	}else{
		img.src = "img/model3red.png";
	}
	
	ColorX = 350;
	price.innerHTML = ((ColorX+type)+35000)+"$";
});
blue.addEventListener('click', function(){
	if(type){
		img.src = "img/model3blueT.png";
	}else{
		img.src = "img/model3blue.png";
	}
	
	ColorX = 300;
	price.innerHTML = ((ColorX+type)+35000)+"$";
});
defaul.addEventListener('click', function(){
	if(type){
		img.src = "img/model3T.png";
	}else{
		img.src = "img/model3.png";
	}
	
	ColorX = 0;
	price.innerHTML = ((ColorX+type)+35000)+"$";
});



type1.addEventListener('click', function(){
	if(ColorX == 0){
		img.src = "img/model3.png";
	}else if(ColorX == 300){
		img.src = "img/model3blue.png";
	}else if(ColorX == 350){
		img.src = "img/model3red.png";
	}else if(ColorX == 500){
		img.src = "img/model3matte.png";
	}
	type= 0;
	price.innerHTML = ((ColorX+type)+35000)+"$";
});
type2.addEventListener('click', function(){
	if(ColorX == 0){
		img.src = "img/model3T.png";
	}else if(ColorX == 300){
		img.src = "img/model3blueT.png";
	}else if(ColorX == 350){
		img.src = "img/model3redT.png";
	}else if(ColorX == 500){
		img.src = "img/model3matteT.png";
	}
	type = 1000;
	price.innerHTML = ((ColorX+type)+35000)+"$";
});

