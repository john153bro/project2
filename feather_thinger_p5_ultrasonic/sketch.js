var url = 'https://api.thinger.io/v3/users/JohnChen/devices/esp8266/resources/SONIC?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJlc3A4MjY2IiwiaWF0IjoxNjE2MzgyNzA4LCJqdGkiOiI2MDU4MGFmNGY1NzgzYzM4NGE0NTc5MTEiLCJzdnIiOiJ1cy1lYXN0LmF3cy50aGluZ2VyLmlvIiwidXNyIjoiSm9obkNoZW4ifQ.t9ca9QHDBHisYMIBwQScxHxnQToJ8Vd5l1g2Kjigpf8';

var bubble = 20;
let counter = 0;

var angle=0;
var dynamicIncrement;
let bgimg;

var timer = 0;
let r = 0;

function preload() {
  bgimg = loadImage('img/bg.png');
 
}


function setup() {
     
    //// make the canvas whatever size you require
    createCanvas(windowWidth-10, windowHeight-10);

}

function draw() {
//image(bgimg,0,0);
//     background(bgimg);
    background("rgba(13,15,0,0.05)");
   for (var x = 0; x < width; x += width / 35) {
		for (var y = 0; y < height; y += height / 20) {
			stroke("rgb(34, 41, 2)");
			strokeWeight(0.5);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
   //// sets the colour of an ellipse and redraws it each frame
    fill("rgba(181, 20, 20, 0.31)")
     
   timer++;
  ellipse(width / 2 + r, bubble+200, 15); 
    
  translate(width/2, height/12);
   
  noFill();
    
    if(timer > random(150,100)){
        r = random(-200, 200);
        timer = 0;
    }
    stroke(124,252,0);
     strokeWeight(1);
  arc(0, 0, 250, 250, 0, radians(900));
  arc(0, 0, 450, 450, 0, radians(900));
  arc(0, 0, 650, 650, 0, radians(900));
  arc(0, 0, 850, 850, 0, radians(900));
  arc(0, 0, 1050, 1050, 0, radians(900));
  arc(0, 0, 1250, 1250, 0, radians(900));   
    
  stroke(124,252,0);
  
    
  if (angle >= 110){
    dynamicIncrement = -0.7
  }
  if(angle <= 0){
    dynamicIncrement = 0.7
  }
  angle += dynamicIncrement
  rotate(radians(angle));
    stroke(124,252,0);
     strokeWeight(5);
  line(0, 0, 500, 350);
 
//  fill(255, 255, 255);
//  stroke(60, 179, 113);
    strokeWeight(2);
    stroke("rgba(175, 175, 175, 0.08)");
  ellipse(0, 0, 30, 30);
  console.log(angle);

    if (counter % 20 == 0) {
        getData();
    }
    counter++;
    
}




function getData() {
   
    
    httpGet(url, 'json', function (response) {
        console.log(response);
        
           if (response){
           bubble = map(response,0, 150, 0, 1000);
        
       } else {
           
           bubble = 150;
       }
    });
}


