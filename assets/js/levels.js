/**
 * Levels
 * 
 * @author: Christopher L Bray <chris@christopherbray.co.uk>
 */
var levels = [];

// Level one map
levels[1] = [];
levels[1][0] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
levels[1][1] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
levels[1][2] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
levels[1][3] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
levels[1][4] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
levels[1][5] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
levels[1][6] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
levels[1][7] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
levels[1][8] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

// Level two map
levels[2] = [];
levels[2][0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
levels[2][0] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1];

var Level = function() {
	
	// Build the bricks array
	this.load = function(round) {

		var row = 0;
		var offsetY = 5;
		var offsetX = 5;
		var color = '#'+Math.floor(Math.random()*16777215).toString(16);

		levels[round].forEach(function() {

			offsetX = 5;

			levels[round][row].forEach(function(brick) {
				
				if (brick != 0) {
					var bonus = Math.random() < 0.8 ? false : 'double';
					bricks.push(new Brick(offsetX, offsetY, color, bonus));
				}

				offsetX += 90;

			});

			color = '#'+Math.floor(Math.random()*16777215).toString(16);
			offsetY += 25;
			row++;

		});

	}

	// Display bricks defined in bricks array
	this.draw = function() {

		bricks.forEach(function(brick) {
		
			if (brick.alive) brick.draw();
		
		});

	}

}