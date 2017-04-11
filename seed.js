// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."};

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id);
//   process.exit(); // we're all done! Exit the program.
// });


var db = require('./models');

db.Car.remove({}, function(err, cars){
	if (err){
		console.log(err);
	}
	console.log('Removed all Cars');
});

var cars = [
{
	year: 1967,
	make: "Ford",
	model: "Mustang",
	transmission: "3 Speed Manual",
	personal_top_speed: 115,
	image: "http://www.cars-on-line.com/photo/55000/67ford55090-1.jpg"
},
{
	year: 1990,
	make: "Nissan",
	model: "Maxima SE",
	transmission: "5 Speed Manual",
	personal_top_speed: 120,
	image: "http://www.autopten.com/images/2430/2543A.jpg"
},
{
	year: 1996,
	make: "Honda",
	model: "Accord Coupe EX",
	transmission: "5 Speed Manual",
	personal_top_speed: 100,
	image: "http://www.2040-cars.com/_content/cars/images/31/398331/002.jpg"
},
{
	year: 1997,
	make: "Acura",
	model: "CL",
	transmission: "4 Speed Auto",
	personal_top_speed: 120,
	image: "http://auto-database.com/image/cars-acura-cl-1997-316868.jpg"
},
{
	year: 1998,
	make: "Toyota",
	model: "4 Runner Limited",
	transmission: "5 Speed Manual",
	personal_top_speed: 85,
	image: "https://s-media-cache-ak0.pinimg.com/originals/a0/24/94/a02494bae765824763583b607cc31aa9.jpg"
},
{
	year: 2004,
	make: "Acura",
	model: "TSX",
	transmission: "6 Speed Manual",
	personal_top_speed: 130,
	image: "http://img.used-cars.info/7c/7c9e82fbf12974baa0b42adfd0da855d.jpg"
},
{
	year: 2001,
	make: "Acura",
	model: "Integra",
	transmission: "5 Speed Manual",
	personal_top_speed: 125,
	image: "https://honda-tech.com/forums/attachments/southern-california-sales-59/287415d1347152456-fs-2001-cypress-green-pearl-acura-integra-gsr-%245800-28.jpg"
},
{
	year: 2004,
	make: "Acura",
	model: "TSX",
	transmission: "5 Speed Auto",
	personal_top_speed: 120,
	image: "https://invimg.autofunds.com/InventoryImages/2016/06/17/2575_877597_15754608_4333117332016.jpg"
}
];

// var motorcycle_list = [
// {
// 	year: 2004,
// 	make: "Suzuki",
// 	model: "GSX-R 600",
// 	personal_top_speed: 130 
// },
// {
// 	year: 2006,
// 	make: "Suzuki",
// 	model: "GSX-R 1000",
// 	personal_top_speed: 145 
// }
// ];

db.Car.create(cars, function(err, cars){
	if (err){
		return console.log(err);
	} else {
	console.log('recreated all Cars');
	console.log('created', cars);
	process.exit();
}
});