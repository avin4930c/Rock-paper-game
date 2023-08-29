function game(e) {
    let user_choice = this.getAttribute('data-choice');
    let winner = "";

    let computer_choice = getComputerChoice();
    if (user_choice.toUpperCase() == computer_choice) {
        winner = "Tie"
    }

    if (user_choice.toUpperCase() == "ROCK") {
        if (computer_choice == "SCISSORS") {
            user_score += 1;
            pscoreDiv.innerHTML = `Player score: ${user_score}`;
            winner = "Player";
        }
        else if (computer_choice == "PAPER"){
            computer_score += 1;
            compscoreDiv.innerHTML = `Gon's Score: ${computer_score}`;
            winner = "GON";
        }
        }

        else if (user_choice.toUpperCase() == "PAPER") {
            if (computer_choice == "ROCK") {
                user_score += 1;
                pscoreDiv.innerHTML = `Player score: ${user_score}`;
                winner = "Player";
            }
            else if (computer_choice == "SCISSORS") {
                computer_score += 1;
                compscoreDiv.innerHTML = `Gon's Score: ${computer_score}`;
                winner = "GON";
            }
        }

        else if (user_choice.toUpperCase() == "SCISSORS") {
            if (computer_choice == "PAPER") {
                user_score += 1;
                pscoreDiv.innerHTML = `Player score: ${user_score}`;
                winner = "Player";
            }
            else if (computer_choice == "ROCK") {
                computer_score += 1;
                compscoreDiv.innerHTML = `Gon's Score: ${computer_score}`;
                winner = "GON";
            }
        }
        if (winner == "GON") {
            compscoreDiv.style.color = "greenyellow";
            compscoreDiv.style.textShadow = "0 0 5px #da7f6b";
            pscoreDiv.style.color = "rgba(230,186,89,255)";
            pscoreDiv.style.textShadow = "none";
        }
        else if (winner == "Player"){
            pscoreDiv.style.color = "greenyellow";
            pscoreDiv.style.textShadow = "0 0 5px #da7f6b";
            compscoreDiv.style.color = "rgba(230,186,89,255)";
            compscoreDiv.style.textShadow = "none";
        }
        if (winner == "Tie") {
            roundResult.innerHTML = `This round is Tied\n<span>Player: ${user_choice.toUpperCase()}      Gon: ${computer_choice}</span>`;
            
        }
        else {
            roundResult.innerHTML = `The winner of this round is ${winner}\n<span>Player: ${user_choice.toUpperCase()}   Gon: ${computer_choice}</span>`; // Add "Good luck next if user loses or other interactive responses"
        }
        if (user_score == 5 || computer_score == 5) {
            finalResult.innerHTML = `${user_score > computer_score ? "Player" : "Gon"} Wins the Game`;
            pbtn.style.display = "block";
            btns.forEach(btn => btn.removeEventListener("click", game));
            }  
    }

function getComputerChoice() {
    let choice_num = Math.floor(Math.random() * 3)
    let computer_choice = choice[choice_num];
    return computer_choice;
}

function playAgain() {
    user_score = 0, computer_score = 0;
    btns.forEach(btn => btn.addEventListener('click', game));
    compscoreDiv.style.color = "rgba(230,186,89,255)";
    compscoreDiv.style.textShadow = "none";
    pscoreDiv.style.color = "rgba(230,186,89,255)";
    pscoreDiv.innerHTML = `Player score: ${user_score}`;
    compscoreDiv.innerHTML = `Gon's Score: ${computer_score}`;
    pscoreDiv.style.textShadow = "none";
    roundResult.textContent = "";
    finalResult.textContent = "";
    pbtn.style.display = "none";
}

function resetImg(e) {
    this.classList.remove('btn-click');
    element.style.color = "rgb(11, 54, 11)";
}

let user_score = 0, computer_score = 0;

const btns = document.querySelectorAll('.btn');
const pbtn = document.querySelector(".play-again");

const roundResult = document.querySelector('.round-result');
const finalResult = document.querySelector('.final-result');

const pscoreDiv = document.querySelector(".user-score");
const compscoreDiv = document.querySelector(".computer-score");

const spans = document.querySelectorAll('span');

const choice = ["ROCK", "PAPER", "SCISSORS"];

let element = "";

btns.forEach(btn => btn.addEventListener('click', game));   
btns.forEach(btn => btn.addEventListener('mouseover', function(e) {
    this.classList.add('btn-click');
    element = document.querySelector(`.btn-text[data-choice = ${this.getAttribute('data-choice')}]`);
    element.style.color = "rgba(230,186,89,255)";
}));
btns.forEach(btn => btn.addEventListener('mouseout', resetImg));
pbtn.addEventListener('click', playAgain);