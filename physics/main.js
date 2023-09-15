window.onload = function() {
	var canvas = document.getElementById("canvas"),
	ct = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	position = vector.create(width/2, height/2),
	velocity = vector.create(0, 0);

	var angleInRadians = Math.PI/180 * 30;

	velocity.setMagnitude(3);
	velocity.setAngle(angleInRadians);

	update();

	function update() {
		ct.clearRect(0, 0, width, height);

		ct.beginPath();
		ct.arc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false);
		ct.fill();

		position.addTo(velocity);

		requestAnimationFrame(update);
	}
}
