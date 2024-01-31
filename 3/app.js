function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function game() {
  const randomNumber = generateRandomNumber()
  let userGuess
do {
    userGuess = prompt("Угадай число от 1 до 10:")

    if (userGuess === null) {
      alert("Игра окончена")
      return;
    } else {
      userGuess = Number(userGuess);
      if (userGuess > randomNumber) {
        alert("Загаданное число меньше")
      } else if (userGuess < randomNumber) {
        alert("Загаданное число больше")
      }
    }
  } while (userGuess !== randomNumber)

  alert("Поздравляю, Вы угадали!!!")
}

game()