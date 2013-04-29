/**
 * Bonuses
 * 
 * @author: Christopher L Bray <chris@christopherbray.co.uk>
 */
var bonuses = [];

var Bonus = function(x, y, color) {

	// Setup configuration
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.color = color;

	this.draw = function() {

		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);

	}

	// Handle bonus falling animation
	this.move = function() {

		this.y += 2;

	}

}