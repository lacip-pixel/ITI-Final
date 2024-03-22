var lives = 3;

// $.get("/support", function(response)){
//
// });

// Function to initialize the count of correct answers from local storage
function initCorrectCount() {
    // Check if the count is already stored in local storage
    if (!localStorage.getItem('correctCount')) {
        // If not, initialize it to 0
        localStorage.setItem('correctCount', 0);
    }
}

// Function to increment the count of correct answers and update local storage
function incrementCorrectCount() {
    localStorage.setItem('correctCount', parseInt(localStorage.getItem('correctCount')) + 1);
}

// Function to check the answer
function score(answer) {
    if (answer === 'm#P52s@ap$V') {
        alert('Correct!');
        // Increment the count of correct answers
        incrementCorrectCount();
        // Redirect to the next page
        window.location.href = '/html/level1.html'; // Replace 'next_page.html' with the URL of the next page
    } else {
        alert('Wrong answer. You have ' + --lives + ' lives remaining.');
        if (lives === 0) {
            // If no lives remaining, redirect to game-over page
            window.location.href = '/html/gameover.html'; 
        }
    }
}
function score2(answer) {
  if (answer === 'HyperText Transfer Protocol Secure') {
      alert('Correct!');
      // Increment the count of correct answers
      incrementCorrectCount();
      // Redirect to the next page
      window.location.href = '/html/level1.html'; // Replace 'next_page.html' with the URL of the next page
  } else {
      alert('Wrong answer. You have ' + --lives + ' lives remaining.');
      if (lives === 0) {
          // If no lives remaining, redirect to game-over page
          window.location.href = '/html/gameover.html'; 
      }
  }
}
function score3(answer) {
  if (answer === 'Spoofed emails') {
      alert('Correct!');
      // Increment the count of correct answers
      incrementCorrectCount();
      // Redirect to the next page
      window.location.href = '/html/level1.html'; // Replace 'next_page.html' with the URL of the next page
  } else {
      alert('Wrong answer. You have ' + --lives + ' lives remaining.');
      if (lives === 0) {
          // If no lives remaining, redirect to game-over page
          window.location.href = '/html/gameover.html'; 
      }
  }
}

// Initialize the count of correct answers when the page loads
initCorrectCount();