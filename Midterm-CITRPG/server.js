const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static("."));

// Route to retrieve team members
app.get("/support", function(req, res) {
    const team = ["Hamid", "Laci"];
    res.json(team);
});

// Route to start the game and return initial number of lives
app.get("/start-game", function(req, res) {
    const lives = 5;
    res.json(lives);
});

// Route to handle form submission
app.post("/submit-comment", (req, res) => {
    const { name, email, comments } = req.body;

    // Process the submitted data (e.g., save to database, send email, etc.)
    // For demonstration purposes, we'll simply log the data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Comments:", comments);

    // Send a response to the client
    res.send("Comment submitted successfully!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
