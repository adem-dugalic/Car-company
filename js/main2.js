
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
		img.src = "img/modelxlMatteT.png";
	}else{
		img.src = "img/modelxlMatte.png";
	}
	
	ColorX = 500;
	price.innerHTML = ((ColorX+type)+95000)+"$";
});
red.addEventListener('click', function(){
	if(type){
		img.src = "img/modelxlRedT.png";
	}else{
		img.src = "img/modelxlRed.png";
	}
	
	ColorX = 350;
	price.innerHTML = ((ColorX+type)+95000)+"$";
});
blue.addEventListener('click', function(){
	if(type){
		img.src = "img/modelxlBlueT.png";
	}else{
		img.src = "img/modelxlBlue.png";
	}
	
	ColorX = 300;
	price.innerHTML = ((ColorX+type)+95000)+"$";
});
defaul.addEventListener('click', function(){
	if(type){
		img.src = "img/modelxlT.png";
	}else{
		img.src = "img/modelxl.png";
	}
	
	ColorX = 0;
	price.innerHTML = ((ColorX+type)+95000)+"$";
});



type1.addEventListener('click', function(){
	if(ColorX == 0){
		img.src = "img/modelxl.png";
	}else if(ColorX == 300){
		img.src = "img/modelxlBlue.png";
	}else if(ColorX == 350){
		img.src = "img/modelxlRed.png";
	}else if(ColorX == 500){
		img.src = "img/modelxlMatte.png";
	}
	type= 0;
	price.innerHTML = ((ColorX+type)+95000)+"$";
});
type2.addEventListener('click', function(){
	if(ColorX == 0){
		img.src = "img/modelxlT.png";
	}else if(ColorX == 300){
		img.src = "img/modelxlBlueT.png";
	}else if(ColorX == 350){
		img.src = "img/modelxlRedT.png";
	}else if(ColorX == 500){
		img.src = "img/modelxlMatteT.png";
	}
	type = 1000;
	price.innerHTML = ((ColorX+type)+95000)+"$";
});

