var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var CarSchema = new Schema({
	year: Number,
	make: String,
	model: String,
	transmission: String,
	personal_top_speed: Number
});

var Car = mongoose.model('Car', CarSchema);
module.exports = Car;