/**
 * Ball
 * 
 * @author: Christopher L Bray <chris@christopherbray.co.uk>
 */
var ball = {

	// Setup configuration
	x: 0,
	y: 0,
	height: 10,
	width: 10,
	velocity: 2,
	vX: 0,
	vY: 0,

	// Adjust configuration settings as required
	init: function() {

		this.x = canvas.width / 2 - (this.width / 2);
		this.y = canvas.height - (paddle.height + this.height + 5);
	
	},

	// Reset configuration settings
	reset: function() {

		this.vY = 0;
		this.x = paddle.x + (paddle.width / 2);
		this.y = canvas.height - (paddle.height + this.height + 5);

	},

	// Handle ball animation
	move: function() {

		this.x += this.vX;
		this.y += this.vY;

		if (this.y <= 0) this.vY *= -1;
		if (this.x <= 0) this.vX *= -1;
		if ((this.y + this.height) > canvas.height) game.reset();
		if ((this.x + this.width) > canvas.width) this.vX *= -1;
		if (ball.vY == 0) ball.x = paddle.x + (paddle.width / 2);

	},

	draw: function() {

		context.fillStyle = '#00ffff';
		context.fillRect(this.x, this.y, this.width, this.height);

	}
}