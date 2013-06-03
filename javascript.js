/*var canvas, ctx, h, w, game = true;
var panzer;

var PANZER = function(x,y){
	this.x = x;
	this.y = y;

	this.color = "red";
	this.radius = 10;
	this.vx = 3;
	this.vy = 3;
}

window.onload = init;
function init(){
	canvas = document.getElementById("myCanvas");
	w = canvas.width;
	h = canvas.height;
	ctx = canvas.getContext("2d");
	panzer = new PANZER(w/2,h/2);
	beginGame();
}

function beginGame(){
	if(game){
		ctx.clearRect(0,0,w,h);


		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI,true)
		ctx.closePath();
		ctx.fill();

		window.webkitRequestAnimationFrame(beginGame);
	}else{
		//Game over
	}
}*/
var canvas, ctx, w, h, game = true;
var toLeft = false, toRight = false, toTop = false, toBottom = false;

var PANZER = function(positionImg, x, y){
	this.x = x;
	this.y = y;
	this.width = 32;
    this.height = 32; 
    this.frames = 7;
    this.speed = 2;
    this.positionImg = positionImg;
    this.currentFrame = 0;
}

window.onload = init;

function init(){
	canvas = document.getElementById("myCanvas"); 
    w = canvas.width;
	h = canvas.height;
    ctx = canvas.getContext("2d");
    image = new Image() 
    image.src = 'img/MulticolorTanks1.png';
    //panzer1 = new PANZER(32, 0, 0); //diff image +32
    panzer = new PANZER(0, 64, 400);

    beginGame();
}

function beginGame(){
	if(game){

	} else {
		//game over
	}
}

document.addEventListener("keydown", function(event){
	if(event.keyCode == 37){
		if(toLeft === true){
			return;
		}
		toLeft = true;
		toRight = false;
		toTop = false;
		toBottom = false;
		panzer.currentFrame = 0;
		panzer.frames = 7;
	} else if(event.keyCode == 38){
		if(toTop === true){
			return;
		}
		toLeft = false;
		toRight = false;
		toTop = true;
		toBottom = false;
		panzer.currentFrame = 7;
		panzer.frames = 15;
	} else if(event.keyCode == 39){
		if(toRight === true){
			return;
		}
		toLeft = false;
		toRight = true;
		toTop = false;
		toBottom = false;
		panzer.currentFrame = 15;
		panzer.frames = 23;
	} else if(event.keyCode == 40){
		if(toBottom === true){
			return;
		}
		toLeft = false;
		toRight = false;
		toTop = false;
		toBottom = true;
		panzer.currentFrame = 23;
		panzer.frames = 31;
	}
});

var draw = function(panzer){
	if(panzer.x + panzer.width == w){
		toRight = false;
	} else if(panzer.x == 0){
		toLeft = false;
	} else if(panzer.y == 0){
		toTop = false;
	} else if(panzer.y == h){
		toBottom = false;
	}


	if(toLeft){
		panzer.x -= panzer.speed;
		if (panzer.currentFrame == panzer.frames) { 
	        panzer.currentFrame = 0; 
	    } else { 
	        panzer.currentFrame++; 
	    }
	} else if(toTop){
		panzer.y -= panzer.speed;
		if (panzer.currentFrame == panzer.frames) { 
	        panzer.currentFrame = 8; 
	    } else { 
	        panzer.currentFrame++; 
	    }
	} else if(toRight){
		panzer.x += panzer.speed;
		if (panzer.currentFrame == panzer.frames) { 
	        panzer.currentFrame = 16; 
	    } else { 
	        panzer.currentFrame++; 
	    }
	} else if(toBottom){
		panzer.y += panzer.speed;
		if (panzer.currentFrame == panzer.frames) { 
	        panzer.currentFrame = 24; 
	    } else { 
	        panzer.currentFrame++; 
	    }
	}


	ctx.clearRect(panzer.x, panzer.y, panzer.width+2, panzer.height+2);
		ctx.fillStyle = "silver";
		ctx.beginPath();
		ctx.arc(200,200,450,0,2*Math.PI,true)
		ctx.closePath();
		ctx.fill();
	ctx.drawImage(image, panzer.positionImg, panzer.width * panzer.currentFrame, panzer.width, panzer.height, panzer.x, panzer.y, panzer.width, panzer.height);
}

setInterval(function(){
	//draw(panzer1);
	draw(panzer);
}, 50);