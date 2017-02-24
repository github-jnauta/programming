function branch(begin, end, scaleFactor, piAngle){
	//Set variables
	this.begin = begin;
	this.end = end;
	this.scaleFactor = scaleFactor;
	this.piAngle = piAngle
	this.finished = false;
	
	//Draw a branch
	this.show = function(thickness) {
		strokeWeight(thickness);
		stroke(139,69,19);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}
	
	//Draw the next two branches
	this.next_branch = function(index) {
		angle = -(2*(index%2)-1)*(this.piAngle);
		var dir = p5.Vector.sub(this.end, this.begin);
		print(dir);
		dir.rotate(angle);
		var newEnd = p5.Vector.add(this.end, dir.mult(scaleFactor))	
		var nextBranch = new branch(this.end, newEnd, scaleFactor, piAngle);
		return nextBranch;
	}
	
	
	//Add external force
	this.move = function(force) {
		this.end.x += force;
	}
}
