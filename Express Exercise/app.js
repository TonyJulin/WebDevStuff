var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, and welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
		var sounds = {
			pig: "Oink",
			cow: "Moo",
			dog: "Woof!",
			cassowary: "Arrrkkk!!"
		};

		var animal = req.params.animal;
		var sound = sounds[animal];
		res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:wordToRepeat/:amount", function(req, res){
	var wordToRepeat = req.params.wordToRepeat;
	var amount = Number(req.params.amount);
	var repeatedString = "";
	for(var i = 0; i < amount; i++) {
		repeatedString += (" " + wordToRepeat);
	}
	res.send(repeatedString);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing?");
});

//Tell express to listen for requests(start server)
const port = parseInt(process.env.port, 10) || 4000;

app.listen(port, function() {
	console.log("Server has started");
	console.log(port);
});

