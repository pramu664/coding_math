var particle = {
	position: null,
	velocity: null,
	gravity: null,
	mass: 1, // new
	radius: 0,

	create: function(x, y, speed, direction, radius, grav) {
		var obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);

		obj.velocity.setMagnitude(speed);
		obj.velocity.setAngle(direction);

		obj.gravity = vector.create(0, grav || 0);

		obj.radius = radius;
		return obj;
	},

	angleTo: function(p2) { // new
		return Math.atan2(p2.position.getY() - this.position.getY(), p2.position.getX() - this.position.getX());
	},

	distanceTo: function(p2) { // new
		let dx = p2.position.getX() - this.position.getX(),
		dy = p2.position.getY() - this.position.getY();

		return Math.sqrt(dx * dx + dy * dy);
	},

	gravitateTo: function(p2) { // new
		let grav = vector.create(0, 0);
		let dist = this.distanceTo(p2);

		grav.setMagnitude(p2.mass/ (dist * dist));
		grav.setAngle(this.angleTo(p2));

		this.velocity.addTo(grav);
	},

	update: function() {
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);
	},

	accelerate: function(acceleration) {
		this.velocity.addTo(acceleration);
	}
};
