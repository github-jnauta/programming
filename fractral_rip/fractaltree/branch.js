function branch(begin, end, scaleFactor, piAngle){
	//Set variables
	this.begin = begin;
	this.end = end;
	this.scaleFactor = scaleFactor;
	this.piAngle = piAngle
	this.finished = false;
	
	//Draw a branch
	this.show = function(thickness) {
		translate(0,0);
		strokeWeight(thickness);
		stroke(139,69,19);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}
	
	//Draw the next two branches
	this.next_branch = function(index) {
		angle = -(2*(index%2)-1)*(this.piAngle);
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(angle);
		var newEnd = p5.Vector.add(this.end, dir.mult(scaleFactor))	
		var nextBranch = new branch(this.end, newEnd, scaleFactor, piAngle);
		return nextBranch;
	}
	
	
	//Add external force
	this.move = function(force, dt) {	
		// distance = this.end.dist(this.begin);
		// print(distance);
		// print("old coords:", this.end.x, this.end.y);
		this.end.x += force;
		// print("xf=",this.end.x);
		// print("(xf-x)^2=", pow(this.end.x - this.begin.x, 2));
		// print("dist^2=", pow(distance,2));
		// print("sqrt=", Math.sqrt(pow(distance,2) - pow(this.end.x - this.begin.x, 2)));
		// this.end.y = this.begin.y - Math.sqrt(pow(distance,2) - pow(this.end.x - this.begin.x, 2));
		// print(this.end.dist(this.begin));
		// print("new coords:", this.end.x, this.end.y);

	}
}
