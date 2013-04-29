/**
 * Helpers
 * 
 * @author: Christopher L Bray <chris@christopherbray.co.uk>
 */

// Check if two objects are inbound of each other
function collides(a, b) {

	return a.x < b.x + b.width &&
				 a.x + a.width > b.x &&
				 a.y < b.y + b.height &&
				 a.y + a.height > b.y;

}

// Wipe down the entire canvas
function clearCanvas() {

	context.fillStyle = '#000';
	context.fillRect(0, 0, canvas.width, canvas.height);

}