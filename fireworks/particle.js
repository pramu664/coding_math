var particle = {
	position: null,
	velocity: null,
	gravity: null,
	mass: 1,
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

	angleTo: function(p2) {
		return Math.atan2(p2.position.getY() - this.position.getY(), p2.position.getX() - this.position.getX());
	},

	distanceTo: function(p2) {
		const x = p2.position.getY() - this.position.getY();
		const y = p2.position.getX() - this.position.getX();
		return Math.sqrt(x * x + y * y);
	},

	gravitateTo: function(p2) {
		const gravity = vector.create(0, 0);
		const magnitude = p2.mass / this.distanceTo(p2) * this.distanceTo(p2);
		const angle = this.angleTo(p2);

		gravity.setMagnitude(magnitude);
		gravity.setAngle(angle);

		this.velocity.addTo(gravity);
	},

	update: function() {
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);
	},

	accelerate: function(acceleration) {
		this.velocity.addTo(acceleration);
	}
};
