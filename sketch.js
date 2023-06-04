var vSize = 10;
var stepper = 100;
let bgImages = [];
let words = [];
let myFont;
var scalerPerc = .66;
let logo;
var bgCounter = 0;
var vKey = 0;
var swingAmount = 8;
var overhang = 0;
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
	textSize(48);
	fill(255);
	textAlign(LEFT, BASELINE);

}

function draw() {
	drawBgL();
	drawTextL();
	drawMask();
	//drawGuides();
}

function drawBgL() {
	background(0);
	let sinSize = 400;
	bgCounter += 0.003;
	//let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2;
	let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + (sin(bgCounter) * (bgImages[vKey].width * scalerPerc) / swingAmount);
	let y = windowHeight / 2 - (bgImages[vKey].height * scalerPerc) / 2;
	let w = bgImages[vKey].width * scalerPerc;
	let h = bgImages[vKey].height * scalerPerc;
	image(bgImages[vKey], x, y, w, h);
	overhang = (bgImages[vKey].width * scalerPerc) / swingAmount;
	stroke(255);
}

function drawTextL() {
	fill(255);
	let x = windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2;
	let y = windowHeight / 2 - (bgImages[vKey].height * scalerPerc) / 2.2;
	let w = logo.width * scalerPerc;
	let h = logo.height * scalerPerc;

	text(words[vKey], windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2.2 + overhang, windowHeight / 2);
	image(logo, windowWidth / 2 - (logo.width * scalerPerc) / 2, y, w, h);
}

function drawMask() {
	noStroke();
	fill(0);
	rect(0, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + overhang, height);
	rect(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc - overhang, 0, width, height);

}

function drawGuides() {
	//lines inc overhang
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2, height)
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc, height);
	//lines less overhang
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + overhang, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + overhang, height);
	line(windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc - overhang, 0, windowWidth / 2 - (bgImages[vKey].width * scalerPerc) / 2 + bgImages[vKey].width * scalerPerc - overhang, height);

}

function keyTyped() {
	if (key>=0&key<=3){
	vKey = key;
}
	//drawBgL(key);
	return false; // prevent any default behaviour
}