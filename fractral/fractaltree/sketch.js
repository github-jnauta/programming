//Generates fractal tree in a full windowed browser

//Set variables
var canvas;
var tree = [];
var scaleFactor = 2.0/3.0;
var treeLen = 0;
var newForce = 0;
var thickness = [];

//Setup
function setup() {
	frameRate(30);
	colorMode(RGB);
	canvas = createCanvas(windowWidth, windowHeight);
	
	//Set angle at which branches fan out
	var piAngle = PI/6;
	
	// Initialize first branch, the root
	var begin = createVector(width/2, height);
	var end = createVector(width/2, height-(height/4));	
	root = new branch(begin, end, scaleFactor, piAngle);
	tree[0] = root;
	thickness[0] = 10;
	
	//Draw the tree
	var maxj = 10;
	for (var j = 0; j<maxj; j++) {		
		for (var i = (tree.length - 1); i>=0; i--) {
			if (!tree[i].finished) {
				//Push right branches
				tree.push(tree[i].next_branch(i));
				//Push left branches
				tree.push(tree[i].next_branch(i+1));
				//Finish 
				tree[i].finished = true;
				thickness.push(maxj+1-j);
			}
		}
	}
}
function mousePressed() {
	
}

//Draw the canvas
function draw() {
	background(46,139,87);
	//~ if (frameCount% == 0) {
		//~ newForce = random(-1,1);
	//~ }
	//~ force = 0.5*sin(frameCount/60)+random(-1,1);
	force = 0;
	//Draw tree tree
	for (var i=0; i<tree.length; i++) {
		tree[i].show(thickness[i]);
		tree[i].move(force);
	}
}

//Resize canvas when window resizes
window.onresize = function() {
	canvas.size(windowWidth, windowHeight);
};
