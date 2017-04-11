// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

// var db = require('./models');
var db = require('./models');

/**********
 * ROUTES *
 **********/
//profile
var me = [
{
  name: "Troy",
  github_link: "https://github.com/trevans24",
  github_image: "https://avatars3.githubusercontent.com/u/23727954?v=3&u=27b043f429a3de42071556abe34c3a2b7ca2cf33&s=400",
  current_city: "Denver",
  pets:[{name: "Rascal", type: "Dog", breed: "Shetland Sheepdog"}]
}
];
// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/trevans24/express_self_api/README.md", // CHANGE ME
    base_url: "http://dry-sands-36786.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/cars", description: "Create a new car"}, // CHANGE ME
      {method: "PUT", path: "/api/cars", description: "Update a car"},
      {method: "DELETE", path: "/api/cars", description: "Remove a car"}
    ]
  });
});

//////////////////
// Routes
//////////////////

// root route: localhost:3000/
app.get('/', function(req, res){
  res.sendFile('views/index.html', {root: __dirname});
});

//get profile info
app.get('/api/profile', function(req,res){
  console.log("Hello");
  res.json(me);
});

//get all cars
app.get('/api/cars', function(req,res){
  db.Car.find()
    .exec(function(err, cars){
      if (err) {console.log("error: ", err); }
     res.json(cars);
    });
});

//get one car
app.get('/api/cars/:id', function(req,res){
  db.Car.findOne({_id: req.params.id}, function(err, data){
    res.json(data);
  });
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
