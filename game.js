var userScore = 0;
var computerScore = 0;
var userchoice = "r";
var userName = "Nemo";
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div =document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const user_div = document.getElementById("user_label")
const banner_div= document.getElementById("banner")

function main() {
    var userName = document.getElementById("name").value;
    user_div.innerHTML=userName;
    console.log(userName); 
    document.getElementById("user_info").style.visibility = "hidden";
    rock_div.addEventListener("click", function() {
        console.log("Rock button");
        userChoice="r";
        game(userChoice,userName);
    })
    paper_div.addEventListener("click", function() {
        console.log("Paper button");
        userChoice="p";
        game(userChoice,userName);
    })
    scissors_div.addEventListener("click", function() {
        console.log("Scissors button");
        userChoice="s";
        game(userChoice,userName);
    })
}

function getComputerChoice() {
    const choices=["r","p","s"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convert(text) {
    switch(text) {
        case "p":
            return "Paper";
        case "r":
            return "Rock";
        case "s":
            return "Scissors";
    }
}
function win(user,computer) {
    console.log("Win");
    userScore++;
    console.log(userScore);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=convert(user)+" beats "+convert(computer)+". You WIN 🎊!!!";
    document.getElementById(userChoice).classList.add("greenGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("greenGlow")},300);
}
function lose(user,computer) {
    console.log("Lose");
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=convert(computer)+" beats "+convert(user)+". You Lose 😪.";
    document.getElementById(userChoice).classList.add("redGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("redGlow")},300);

}
function draw(user,computer) {
    console.log("Draw");
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=convert(user)+" equals "+convert(computer)+". It's a Draw 😐.";
    document.getElementById(userChoice).classList.add("grayGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("grayGlow")},300);

}
function leader(userName) {
    if(userScore==computerScore){
        banner_div.innerHTML="Both are head to head!!!";
    }
    if(userScore>computerScore){
        banner_div.innerHTML=userName+" leads the Game!!! Congratulations";
    }
    if(userScore<computerScore){
        banner_div.innerHTML="The Computer leads the Game!!! Try Harder";
    }
}
function game(userChoice,userName) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("User Wins");
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("Computer wins");
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Its a  draw");
            draw(userChoice,computerChoice);
            break;
    }
    leader(userName);
}

