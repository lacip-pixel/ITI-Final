const express = require("express");
const Pool = require('pg').Pool
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
 })

 

app.get("/", (req, res) => {
    res.redirect('/html/home.html');
 });

 app.use(express.static('../Public'))


  app.use(bodyParser.json());

  app.get('/quiz_questions', (req, res) => {
      pool.query('SELECT * FROM quiz_questions ORDER BY question_id LIMIT 1', (err, result) => {
          if (err) {
              console.error('Error executing query', err);
              res.status(500).json({ error: 'Error fetching data from database' });
          } else {
              const question = result.rows[0]; // Extract the first question
              if (question) {
                  const questionData = {
                      questionText: question.question_text,
                      correctOption: question.correct_option,
                      options: [question.option_1, question.option_2, question.option_3, question.option_4]
                  };
                  res.json(questionData);
              } else {
                  res.status(404).json({ error: 'No questions found' });
              }
          }
      });
  });
  app.get('/quiz_questions/2', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 1 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/3', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 2 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/4', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 3 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/5', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 4 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/6', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 5 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/7', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 6 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/8', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 7 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/9', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 8 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/10', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 9 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/11', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 10 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
app.get('/quiz_questions/12', (req, res) => {
    pool.query('SELECT * FROM quiz_questions ORDER BY question_id OFFSET 11 LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Error fetching data from database' });
        } else {
            const question = result.rows[0]; // Extract the first question
            if (question) {
                const questionData = {
                    questionText: question.question_text,
                    correctOption: question.correct_option,
                    options: [question.option_1, question.option_2, question.option_3, question.option_4]
                };
                res.json(questionData);
            } else {
                res.status(404).json({ error: 'No questions found' });
            }
        }
    });
});
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

// Route to handle user signup
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Here you can perform validation, hash passwords, and save user data to the database
        // For demonstration, we'll just log the received data
        console.log('Received signup data:', { username, email, password });

        res.status(200).json({ success: true, message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error processing signup:', error);
        res.status(500).json({ error: 'Error processing signup' });
    }
});

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-comment', (req, res) => {
    const { name, email, comments } = req.body;

    // Basic validation
    if (!name || !email || !comments) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Send email with the form data
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password'
        }
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'support@example.com',
        subject: 'New Support Comment',
        text: `Name: ${name}\nEmail: ${email}\nComment: ${comments}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).json({ error: 'An error occurred while sending the email.' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Comment submitted successfully.' });
    });
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});