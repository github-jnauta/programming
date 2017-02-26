//Generates fractal tree in a full windowed browser

//Set variables
var canvas;
var tree = [];
var scaleFactor = 2.0/3.0;
var treeLen = 0;
var newForce = 0;
var thickness = [];
var framerate = 30;

//Setup
function setup() {
	//Create canvas
	frameRate(framerate);
	colorMode(RGB);
	canvas = createCanvas(windowWidth, windowHeight);
	
	//Set angle at which branches fan out
	var piAngle = PI/6;
	
	// Initialize first branch, the root
	var begin = createVector(width/2, height);
	var end = createVector(width/2, height-(height/4));	
	// end = createVector(0,-height/4);
	root = new branch(begin, end, scaleFactor, piAngle);
	tree[0] = root;
	thickness[0] = 10;
	
	//Draw the tree
	var maxj = 8;
	for (var j = 0; j<maxj; j++) {		
		newLen = tree.length;
		for (var i = (tree.length - 1); i>=0; i--) {
			//Push right branches
			tree.push(tree[i].next_branch(i));
			//Push left branches
			tree.push(tree[i].next_branch(i+1));
			//Push the thickness of each branch
			thickness.push(maxj+1-j);		
		}
	}
}
function mousePressed() {
	
}

//Draw the canvas
function draw() {
	// noLoop();

	background(46,139,87);
	force = 0.5*sin(frameCount/30)+random(-4,4);

	//Draw tree tree
	for (var i=0; i<tree.length; i++) {
		tree[i].move(force, 1./framerate);		
		tree[i].show(thickness[i]);
	}
	print(tree.length);
}

//Resize canvas when window resizes
window.onresize = function() {
	canvas.size(windowWidth, windowHeight);
};
