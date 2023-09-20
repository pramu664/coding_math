window.onload = function () {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	// Define the ship and thrust
	const ship = particle.create(width/2, height/2, 0, 0);
	const thrust = vector.create(0, 0);

	// what happens when the user presses down a key
	// When user presses and keep pressing we apply thrust to the ship
	document.body.addEventListener("keydown", function(event) {

		console.log(event.key);

		switch(event.key) {
				case "ArrowLeft":
					thrust.setX(-0.1); // left
					break;
				case "ArrowUp":
					thrust.setY(-0.1); // up
					break;
				case "ArrowRight":
					thrust.setX(0.1); // right
					break;
				case "ArrowDown":
					thrust.setY(0.1); //down
					break;
				default:
					break;
		}
	});

	// what happens when the user releases from key
	// when user releases the key we no longer apply thrust to the ship
	document.body.addEventListener("keyup", function(event) {

		switch(event.key) {
			case "ArrowLeft":
				thrust.setX(0); // left
				break;
			case "ArrowUp":
				thrust.setY(0); // up
				break;
			case "ArrowRight":
				thrust.setX(0); // right
				break;
			case "ArrowDown":
				thrust.setY(0); // down
			default:
				break;
		}

	});
	
	update();

	function update() {

		// Draw the ship
		ct.clearRect(0, 0, width, height);
		ct.beginPath();
		ct.arc(ship.position.getX(), ship.position.getY(), 5, 0, Math.PI * 2, false);
		ct.fill()

		// Apply velocity and acceleration to the ship
		ship.update();
		ship.accelerate(thrust);

		// What happens when the ship move out from the window
		if (ship.position.getX() > width) {
			ship.position.setX(0);
		} else if (ship.position.getX() < 0) {
			ship.position.setX(width);
		} else if (ship.position.getY() > height) {
			ship.position.setY(0);
		} else if (ship.position.getY() < 0) {
			ship.position.setY(height);
		}

		requestAnimationFrame(update);
	}

};

