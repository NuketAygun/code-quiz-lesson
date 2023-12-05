var startScreenEl = document.getElementById("startScreen");

var startButtonEl = document.getElementById("start");

var questionsEl = document.getElementById("questions");

var questionTitleEl = document.getElementById("question-title");

var choicesEl = document.getElementById("choices");

var q=0;
var score= 0;



for(b =1; b<=3; b++){
    var button = document.createElement("button");
    button.setAttribute("id", b);
    choicesEl.appendChild("button");
}

startButtonEl. addEventListener("click", function(){
    q=0;
    score=0;
    startScreenEl.setAttribute("class","hide");
    questionsEl.setAttribute("class","start");
})



