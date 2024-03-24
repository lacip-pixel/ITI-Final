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
    const lives = 3;
    res.json(lives);
});
// Route to check submitted answer
app.post("/check-answer", (req, res) => {
    const { answer } = req.body;

    // Check the correct answer
    // Example: if answer is correct, decrement lives; otherwise, redirect to game over page
    if (answer === "correct_answer") {
        // Decrement lives or update game state as needed
        // For demonstration, we'll just send a success message
        res.json({ success: true, message: "Correct answer! Lives decremented." });
    } else {
        // Redirect to game over page
        res.redirect("/gameover.html");
    }
});

// Route to handle game over (if needed)
app.get("/game-over", (req, res) => {
    // Perform any necessary actions when the game is over
    res.send("Game over!");
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
