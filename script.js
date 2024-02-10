let history = ['История:'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showHistory(a) {
  history.push(`Игра №${history.length} – Попыток: ${a}`);
  console.log(history.join('\n'));
}

function play() {
  const randNum = getRandomNumber(1, 10);
  let num = prompt("Угадай число от 1 до 10");
  let attempt = 0;
  let attemptStill = 10;
  let restart;

  while (true) {
    let intNum = +num;

    if (parseFloat(num) === intNum) {
      attempt++
      if (intNum === randNum) {
        showHistory(attempt);
        restart = confirm("Вы угадали!!! Хотели бы сыграть еще?");
      } else if (intNum > randNum && attempt < 10) {
        num = prompt(`Загаданное число меньше, осталось попыток ${--attemptStill}`);
        continue
      } else if (intNum < randNum && attempt < 10) {
        num = prompt(`Загаданное число больше, осталось попыток ${--attemptStill}`);
        continue
      } else {
        showHistory(attempt);
        restart = confirm("Попытки закончились, хотите сыграть еще?");
      }
      if (restart) {
        play();
      }
      return;
    } else if (num === null) {
      confirm("Игра окончена");
      break;
    } else {
      num = prompt("Введи число!");
    }
  }
}

play();