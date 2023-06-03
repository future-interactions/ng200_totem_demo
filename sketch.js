var vSize = 10;
var stepper = 100;
let bgImages = [];
let words = [];
let myFont;
var scalerPerc=.33;
function preload() {
  bgImages[0] = loadImage('assets/whistlejacket.png');
  bgImages[1] = loadImage('assets/whistlejacket.png');
  bgImages[2] = loadImage('assets/sunflowers.png');
  bgImages[3] = loadImage('assets/duchess.png');
  myFont = loadFont('assets/DMSans-Medium.ttf');

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	fill(255, 0, 0);
	words[0] = 'whistlejacket';
	words[1] = 'whistlejacket';
	words[2] = 'sunflowers';
	words[3] = 'duchess';
	textFont(myFont);
	textSize(32);
fill(255);
textAlign(CENTER, BASELINE);

}

function draw() {
}

function drawContent() {
	background(0);
	image(bgImages[key], windowWidth/2-(bgImages[0].width *scalerPerc)/2,windowHeight/2-(bgImages[0].height*scalerPerc) / 2,(bgImages[0].width *scalerPerc),(bgImages[0].height *scalerPerc));
	text(words[key], windowWidth/2,windowHeight/2);
}
function keyTyped() {
	drawContent(key);
	return false; // prevent any default behaviour
}