/**
 * Bricks
 * 
 * @author: Christopher L Bray <chris@christopherbray.co.uk>
 */
var bricks = [];

var Brick = function(x, y, color, bonus) {

	// Setup configuration
	this.x = x;
	this.y = y;
	this.width = 80;
	this.height = 20;
	this.alive = true;
	this.color = color;
	this.bonus = false;

	this.draw = function() {

		this.bonus = bonus;
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);

	}

}