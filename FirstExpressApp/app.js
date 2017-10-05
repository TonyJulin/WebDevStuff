var express = require("express");
var app = express();

// "/" ==> "Hi"
app.get("/", function(req, res) {
		console.log("Somebody called /dog endpoint");
		res.send("Hi there!");
});

// "/bye" ==> "Goodbye"
app.get("/bye", function(req, res) {
		console.log("Somebody called /dog endpoint");
		res.send("Goodbye");
});

// "/dog" ==> "WOOF"
app.get("/dog", function(req, res) {
		console.log("Somebody called /dog endpoint");
		res.send("WOOF!");
});

//Create pattern
app.get("/r/:subredditName", function(req, res){
	res.send("Welcome to a subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
	res.send("Welcome to the comments page");
});

app.get("*", function(req, res){
	res.send("You are a star!");
});

//Tell express to listen for requests(start server)
const port = parseInt(process.env.port, 10) || 4000;

app.listen(port, function() {
	console.log("Server has started");
	console.log(port);
});
