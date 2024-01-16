var startBtn = document.getElementById("start");
var subut = document.getElementById("submit");
var secondsLeft = 76;
var timerInterval;  
var jsquestions = document.querySelector("questions");
var choicesjs = document.querySelector("choices")

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        document.getElementById("time").textContent = secondsLeft ;
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            alert("Run out of time!");
        }
    }, 1000);
}

console.log(questions.length)
function arrquestions() {
    jsquestions.textContent = "";
    for (var i = 0; i < questions.length; i++) {
        var questLi = document.createElement("li");
        questLi.textContent = questions[i];
        jsquestions.append(questLi);
    }
}
arrquestions();

startBtn.addEventListener("click", function () {
    setTime();
    document.getElementById("start-screen").classList.add("hide");

    
    document.getElementById("questions").classList.remove("hide");

  document.getElementById("question-title")
});

console.log()

subut.addEventListener("click", function () {
    clearInterval(timerInterval); 
});

console.log(questions[2])
console.log(choices[2])
console.log(correctAnswers[2])