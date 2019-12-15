userScore = 0;
computerScore = 0;
userchoice = "r";
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div =document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function main() {
rock_div.addEventListener("click", function() {
    console.log("Rock button");
    userChoice="r";
    game(userChoice);
})
paper_div.addEventListener("click", function() {
    console.log("Paper button");
    userChoice="p";
    game(userChoice);
})
scissors_div.addEventListener("click", function() {
    console.log("Scissors button");
    userChoice="s";
    game(userChoice);
})
}

main();

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
function game(userChoice) {
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
}

