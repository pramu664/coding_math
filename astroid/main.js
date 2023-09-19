window.onload = function () {
	const canvas = document.getElementById("canvas");
	const ct = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	// Create a ship 
	const ship = particle.create(width/2, height/2, 0, Math.PI * 2);

	// Force
	let thrust = vector.create(0, 0);

	// Apply force 
	document.body.addEventListener("keydown", function(event) {
		if (event.keyCode == 37) {
			console.log("apply thrust to left");
			thrust = vector.create(-0.1, 0);

		} else if (event.keyCode == 38) {
			console.log("apply thrust to up");
			thrust = vector.create(0, -0.1);

		} else if (event.keyCode == 39) {
			console.log("apply thrust to right");
			thrust = vector.create(0.1, 0);

		} else if (event.keyCode == 40) {
			console.log("apply thrust to down down");
			thrust = vector.create(0, 0.1);

		} else {
			return;
		}
	});
	
	update();

	function update() {

		ct.clearRect(0, 0, width, height);
		ct.beginPath();
		ct.arc(ship.position.getX(), ship.position.getY(), 5, 0, Math.PI * 2, false);
		ct.fill()

		ship.update();
		ship.accelerate(thrust);

		requestAnimationFrame(update);
	}

};

