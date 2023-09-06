//Rock paper scissors Console Game
// 2 players human, computer
// 3 weapons rock, paper, scissors
// rounds winner,loser

// plan
// Console Game
// Human input -> weapon of choice
// computer choice -> weapon of choice
// process
// output ->  winner
// Psuedocode
// 1. get input of human player using prompt ()
// 2. Store the human input in a variable
// 3. get the weapon of computer
// 4. create a function that generates random weapon of choice for computer
// 5. Store the computer weapon in a variable
// 6. Create a function that takes two parameters, Playerweapon, computerweapon
// 7. process the weapons to find out the results

function getComputerSelection() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}
const playerSelection = prompt("Type your weapon!");
const computerSelection = getComputerSelection();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "you win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "you win";
  } else {
    return "you lose";
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    const playerSelection = prompt("Type your weapon!");
    const computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
