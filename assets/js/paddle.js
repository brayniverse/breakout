var paddle = {
	x: 0,
	y: 0,
	height: 10,
	width: 175,
	velocity: 8,

	init: function() {
		this.x = canvas.width / 2 - (this.width / 2);
		this.y = canvas.height - this.height;
	},

	move: function(x) {
		this.x += x;

		if (this.x < 0) this.x = 0;
		if ((this.x + this.width) > canvas.width) this.x = canvas.width - this.width;
	},

	draw: function() {
		context.fillStyle = '#00ffff';
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}