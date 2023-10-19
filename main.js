const getUserChoice = (userInput) => {
    userInput = userInput.toLowercase();

    if (userInput === 'rock'|| 'paper' || 'scissors') {
        return userInput;
    }
    else {
        return 'Error Input'
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.random() * 3;
    switch (randomNumber) {
        case 0:
          return "rock";
          break;
        case 1:
          return "paper";
          break;
        default:
          return "scissors";
          break;
      }
}



function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Tie";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    } else {
      if (computerChoice === "rock") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    }
  }

  const playGame = () => {
    let userChoice = getUserChoice();
    console.log("You chose: ", userChoice);
    let computerChoice = getComputerChoice();
    console.log("The Computer chose: ", computerChoice);
    let winnerText = determineWinner(userChoice, computerChoice);
    alert(`${winnerText}`);
  }