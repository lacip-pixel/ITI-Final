const button = document.querySelector("input");


function highlightAnswerWithClass(question, answer, className) {
    var answers = document.forms.form;
    for (var index = question*4; index < question*4 + 4; index++) {
      if (answers[index].value === answer) {
        answers[index].classList.add(className);
      }
    }}
    function score() {
        //Referencing the value of the questions
        var q1 = document.forms.form.q1.value;
     
      
        // disable form
        var elements = document.getElementById("questions").elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
          elements[i].disabled = true;
        }
      
        //Array for the questions
        var questions = [q1];
      
        //Answers for each question
        var answers = ["m#P52s@ap$V"];
      
        //variable to keep track of the points
        var points = 0;
        var total = 1;
        //max score
      
        //Making use of a for loop to iterate over the questions and answers arrays
        for (var i = 0; i < total; i++) {
          
          if (questions[i] == answers[i]) {
            points = points + 2; //Increment the score by 2 for every correct answer given
            highlightAnswerWithClass(i, questions[i], "correct");
          } else {
            points = points - 1;
            highlightAnswerWithClass(i, questions[i], "incorrect");
            highlightAnswerWithClass(i, answers[i], "correct");
          }
        }}