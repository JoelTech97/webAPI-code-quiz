var startBtn = document.getElementById("start");
var subut = document.getElementById("submit");
var secondsLeft = 30;
var timerInterval;  

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        document.getElementById("time").textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
}

startBtn.addEventListener("click", function () {
    setTime();
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
});

subut.addEventListener("click", function () {
    clearInterval(timerInterval); 
});
