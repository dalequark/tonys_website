/**
 * @author Dale Markowitz
 */

//canvas variables

var height = 200;
var width = $('header').width();
var bkgdColor = '#d0e7f9';


//set up canvas
var c = document.getElementById('c'); //canvas element
var ctx = c.getContext('2d'); //canvas element with ability to paint, etc.

c.height = height;
c.width = width;

var invader1 = new Image();
var invader2 = new Image();

invader1.src = "invader1.png";
invader2.src = "invader2.png";

/*var moveInvaderDown = function(){
     ctx.clearRect(0,0, canvas.width, canvas.height);
	 var x = 0; 
	 var y = 0;
	 int i = 0;
	 if(i = 0){
	 	ctx.drawImage(invader1,x,y);
	 	i++;
	 }
	 if(i = 1){
	 	ctx.drawImage(invader2,x,y);
	 	i--;
	 }
	 x += 5;;
}

img.onload = function(){
	 
}*/
