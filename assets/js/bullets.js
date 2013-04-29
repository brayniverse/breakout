/**
 * Bullets
 * 
 * @author: Christopher L Bray <chris@christopherbray.co.uk>
 */
var bullets = [];

var Bullet = function(x, y) {
	
	// Setup configuration
	this.x = paddle.x + (paddle.width / 2);
	this.y = paddle.y;
	this.width = 3;
	this.height = 5;
	this.vY = 0;
	this.active = false;

	// Fire bullet from center of paddle
	this.fire = function() {

		this.x = paddle.x + (paddle.width / 2);
		this.vY = -10;
		this.active = true;

	}

	this.draw = function(x) {

		context.fillStyle = '#fff';
		context.fillRect(this.x, this.y, this.width, this.height);

	}

	// Handle bullet animation
	this.move = function(x, y) {

		this.y += y;

	}

}