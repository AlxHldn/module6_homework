let inputDataFirstNum = +prompt("Введите начальное чилсо");
let inputDataSecondNum = +prompt("Введите конечное чилсо");

let allNumbers = function (firstNum, secondNum) {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    console.log("Вы ввели не число!");
  }
  if (firstNum > secondNum) {
    console.log("Первое число меньше второго!");
  }
  let interval = setInterval(() => {
    if (firstNum <= secondNum) {
      console.log(firstNum);
      firstNum++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
};

allNumbers(inputDataFirstNum, inputDataSecondNum);
