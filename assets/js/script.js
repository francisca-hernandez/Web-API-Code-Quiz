var questions = [
    {
      title: "which method saces data to locatStorage:",
      choices: ["setItem", "nowItem", "getItem", "putawayItem"],
      answer: "setItem"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "A ____ data type is a value that can only be either true or false.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "boolean"
    },
    {
      title:
        "Which value makes a webpage interactive.",
      choices: ["HTML", "CSS", "JavaScript", "SQL"],
      answer: "JavaScript"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log" 
    }
  ];
 
  // Timer established on screen
var secondsLeft = 31;
// if (timerEl) {
//     timerEl.textContent = secondsLeft + " seconds remaining";
// }

// // Timer countdown function
// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timerEl.textContent = secondsLeft + " seconds remaining";

//         if (secondsLeft <= i || questionCounter === quizArr.length) {
//             clearInterval(timerInterval);
//             gameOverMsg();
//         }
//     }, 1000);
// }

//Display Questions
var i=0

document.querySelector("#start").onclick= function(){
    document.querySelector("#start").style.display="none";
    displayQuestion();
    setInterval(()=>{
        if(secondsLeft>0){

            secondsLeft--;
            document.querySelector("#timer").textContent=secondsLeft
        }
    }, 1000)
}

function displayQuestion(){
    if(i< questions.length){


       // document.querySelector('#quizSpace').innerHTML= "";
        document.querySelector("#quizSpace").innerHTML=
        `<h3>${questions[i].title}</h3>
        <button>${questions[i].choices[0]}</button>
        <button>${questions[i].choices[1]}</button>
        <button>${questions[i].choices[2]}</button>
        <button>${questions[i].choices[3]}</button>
        `
    }

}

document.querySelector("#quizSpace").onclick=function(e){
    e.preventDefault()
    var answer =e.target.innerText;
    if(answer===questions[i].answer){
        document.querySelector("#answer").textContent="correct"
    }else{
        document.querySelector("#answer").textContent="wrong"
    }
    setTimeout(()=>{
        
        document.querySelector("#answer").textContent=""
        i++;
        displayQuestion()
    }, 1000)
}
