/**
 * Game
 */
var canvas = $('canvas')[0],
    context = canvas.getContext('2d'),
    gameLoop = null;

var game = {
	width: 800,
	height: 500,
	lives: 5,
	score: 0,
	level: 1,
	fps: 60,

	init: function() {

		level = new Level();
		bonus = new Bonus();
		bullet = new Bullet();

		level.load(game.level);
		ball.init();
		paddle.init();

		gameLoop = setInterval(function() {

			game.update();
			game.render();

		}, 1000 / game.fps);

	},

	update: function() {

		if (game.hasLives()) {
			game.handleInput();
			game.handleCollisions();
			ball.move();

			if (bonuses.length > 0) {
				bonuses.forEach(function(bonus) {
					bonus.move();
				});
			}
			var i = 0;
			if (bullets.length > 0) {
				bullets.forEach(function(bullet) {
					if (bullet.y < 0) bullets.splice(i, 1);
					if (bullet.active) bullet.move(bullet.x, bullet.vY);
					i++;
				});
			}
		}
		else {
			clearInterval(gameLoop);
			clearCanvas();
			context.fillStyle = '#fff';
			context.font = 'bold 24pt monospace';
			context.textBaseline = 'bottom';
			context.textAlign = 'center';
			context.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
		}

		$('.lives').html(game.lives);
		$('.score').html(game.score);

	},

	render: function() {

		if (game.hasLives()) {
			clearCanvas();
			paddle.draw();
			ball.draw();
			level.draw();

			if (bullets.length > 0) {
				bullets.forEach(function(bullet) {

					if (bullet.active == true) {
						bullet.draw();
					}

				});
			}
			if (bonuses.length > 0) {
				bonuses.forEach(function(bonus) {

					bonus.draw();

				});
			}
		}

	},

	reset: function() {

		this.lives -= 1;
		ball.reset();

	},

	hasLives: function() {

		return this.lives > 0;

	},

	handleInput: function() {

		if (keydown.left) paddle.move(-paddle.velocity);
		if (keydown.right) paddle.move(paddle.velocity);
		if (keydown.space && ball.vY == 0) ball.vY = -8;
		if (keydown.space && ball.vY != 0) new Bullet(paddle.x, paddle.y);

		var i = 0;
		if (bullets.length > 0) {
			if (keydown.space && ball.vY != 0) {
				bullets[i].fire();
				i++;
			}
		}
	
	},

	handleCollisions: function() {

		if (collides(ball, paddle)) {
			ball.vY = -ball.vY;
			ball.vX = (ballPoint = ball.x + (ball.width / 2)) - (paddlePoint = paddle.x + (paddle.width / 2)) - 5;

			if (ball.vX > ball.velocity && ball.vX != 0) ball.vX = ball.velocity;
			if (ball.vX < -ball.velocity && ball.vX != 0) ball.vX = -ball.velocity;
		}

		bricks.forEach(function(brick) {

			if (brick.alive == false) return;

			if (collides(ball, brick)) {
				ball.vY = -ball.vY;
				brick.alive = false;
				game.score += 10;

				if (brick.bonus != false) {

					bonuses.push(new Bonus((brick.x + (brick.width / 2)) - 10, brick.y, '#fff'));
				
				}
			};

		});

		var i = 0;
		bullets.forEach(function(bullet) {

			if ( ! bullet.active) return;

			bricks.forEach(function(brick) {

				if ( ! brick.alive) return;

				if (collides(brick, bullet)) {
					brick.alive = false;
					game.score += 5;
					bullet.active = false;
					bullets.splice(i, 1);
				}

			});

			i++;
		});

		bonuses.forEach(function(bonus) {
			if (collides(bonus, paddle)) {
				bonus.x = -canvas.width;
				for (x=0;x<10;x++) {
					bullets.push(new Bullet(0, 0));
				}
			}
		})

	}

}