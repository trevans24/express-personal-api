var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var MotorcycleSchema = new Schema({
	year: Number,
	make: String,
	model: String,
	personal_top_speed: Number
});

var Motorcycle = mongoose.model('Motorcycle', MotorcycleSchema);

module.exports = Motorcycle;