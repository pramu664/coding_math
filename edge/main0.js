window.onload = function() {
	const canvas = document.getElementById("canvas");
	const context = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;


	const p = particle.create(100, height - 100, 4, Math.PI, 50);
	const p2 = particle.create(100, height - 300, 4, 3*(Math.PI/2), 50);


	update();


	function update() {
		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		context.arc(p2.position.getX(), p2.position.getY(), p2.radius, 0, Math.PI * 2, false);
		context.fill();

		p.update();
		p2.update();


	// Blink effect edge handling is easy to understand. But it has draw backs. It's not realistic. But smooth version is good. It considering the "radius" of particle. 
	// Imagine the point of rendering of the circle. If you add radius to it. The point move right. But first we want that point to be go left. so reduce the radius. That's the point we want to check. First figure out the point you want to check. Then you set the instantiating point. Again imagine the point. 0 point is not good it gives the blink effect. We don't want that. I am bad of documenting. Just view the results and understand.
		if (p.position.getX() > width) {
			p.position.setX(0);
			// Blink effect
		}

		if (p.position.getX() < 0) {
			p.position.setX(width);
			// Blink effect
		}


		// X axis
		if (p2.position.getX() - p2.radius > width) {
			p2.position.setX(-p2.radius);
			// Smooth effect
		}

		if (p2.position.getX() + p2.radius < 0) {
			p2.position.setX(width + p2.radius);
			// Smooth effect
		}

		// Y axis
		if (p2.position.getY() - p2.radius > width) {
			p2.position.setX(-p2.radius);
			// Smooth effect
		}

		if (p2.position.getY() + p2.radius < 0) {
			p2.position.setY(height + p2.radius);
			// Smooth effect
		}

		requestAnimationFrame(update);
	}
};
