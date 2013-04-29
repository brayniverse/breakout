var bullets = [];

var Bullet = function(x, y) {
	
	this.x = paddle.x + (paddle.width / 2);
	this.y = paddle.y;
	this.width = 3;
	this.height = 5;
	this.vY = 0;
	this.active = false;

	this.fire = function() {

		this.x = paddle.x + (paddle.width / 2);
		this.vY = -10;
		this.active = true;

	}

	this.draw = function(x) {

		context.fillStyle = '#fff';
		context.fillRect(this.x, this.y, this.width, this.height);

	}

	this.move = function(x, y) {

		this.y += y;

	}

}