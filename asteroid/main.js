window.onload = function () {
	
	// Context set up
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;


	// Ship setup 
	const ship = particle.create(width/2, height/2, 0, 0);
	const thrust = vector.create(0, 0);
	let angle = 0;

	// States and state mangement
	let turningLeft = false;
	let turningRight = false;
	let thrusting = false;
	document.body.addEventListener("keydown", function(event) {

		switch(event.key) {
				case "ArrowLeft":
					turningLeft = true;
					break;

				case "ArrowRight":
					turningRight = true;
					break;

				case "ArrowUp":
					thrusting = true;
					break;

				default:
					break;
		}
	});


	document.body.addEventListener("keyup", function(event) {

		switch(event.key) {

			case "ArrowUp":
				thrusting = false;
				break;

			case "ArrowLeft":
				turningLeft = false;
				break;

			case "ArrowRight":
				turningRight = false;
				break;

			default:
				break;
		}

	});
	

	// Calls every frame
	update();
	function update() {
		ct.clearRect(0, 0, width, height);

		// Set the angle for the ship
		if (turningRight) {
			angle += 0.05;
		}
		if (turningLeft) {
			angle -= 0.05;
		}

		// Set the angle for the thrust vector
		thrust.setAngle(angle);

		// Set the magnitude for thrust vector
		if (thrusting) {
			thrust.setMagnitude(0.1);
		} else {
			thrust.setMagnitude(0);
		}

		// Apply thrust
		ship.accelerate(thrust);

		// Apply velocity  
		ship.update();


		// Translate and rotate the coordinate system
		ct.save();
		ct.translate(ship.position.getX(), ship.position.getY());
		ct.rotate(angle);

		// Render the ship
		ct.beginPath();
		ct.moveTo(10, 0);
		ct.lineTo(-10, -7);
		ct.lineTo(-10, 7);
		ct.lineTo(10, 0);
		if (thrusting) {
			ct.moveTo(-10, 0);
			ct.lineTo(-18, 0);
		}
		ct.stroke();


		// Restore the coordinate system
		ct.restore();


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

