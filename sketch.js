var vSize = 10;
var stepper = 100;
let bgImages = [];
let words = [];
let myFont;
var scalerPerc = .5;
let logo;
function preload() {
	bgImages[0] = loadImage('assets/whistlejacket.png');
	bgImages[1] = loadImage('assets/whistlejacket.png');
	bgImages[2] = loadImage('assets/sunflowers.png');
	bgImages[3] = loadImage('assets/duchess.png');
	myFont = loadFont('assets/DMSans-Medium.ttf');
	logo = loadImage('assets/logo.png');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	fill(255, 0, 0);
	words[0] = 'Welcome';
	words[1] = 'Opening soon';
	words[2] = 'Open';
	words[3] = 'Closing soon';
	textFont(myFont);
	textSize(32);
	fill(255);
	textAlign(CENTER, BASELINE);

}

function draw() {
}

function drawBgL() {
	background(0);
	let x = windowWidth / 2 - (bgImages[key].width * scalerPerc) / 2;
	let y = windowHeight / 2 - (bgImages[key].height * scalerPerc) / 2;
	let w = bgImages[key].width * scalerPerc;
	let h = bgImages[key].height * scalerPerc;
	image(bgImages[key], x, y, w, h);
}

function drawTextL() {
	let x = windowWidth / 2 - (logo.width * scalerPerc) / 2;
	let y = windowHeight / 2 - (bgImages[key].height * scalerPerc) / 2.2;
	let w = logo.width * scalerPerc;
	let h = logo.height * scalerPerc;
	text(words[key], windowWidth / 2, windowHeight / 2);
	image(logo,x,y,w,h);
}
function keyTyped() {
	drawBgL(key);
	drawTextL(key);
	return false; // prevent any default behaviour
}