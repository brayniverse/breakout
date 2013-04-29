function collides(a, b) {

	return a.x < b.x + b.width &&
				 a.x + a.width > b.x &&
				 a.y < b.y + b.height &&
				 a.y + a.height > b.y;

}

function clearCanvas() {

	context.fillStyle = '#000';
	context.fillRect(0, 0, canvas.width, canvas.height);

}