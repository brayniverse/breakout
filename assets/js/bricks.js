var bricks = [];

var Brick = function(x, y, color, bonus) {

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

var bonuses = [];

var Bonus = function(x, y, color) {

	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.color = color;

	this.draw = function() {

		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);

	}

	this.move = function() {

		this.y += 2;

	}

}