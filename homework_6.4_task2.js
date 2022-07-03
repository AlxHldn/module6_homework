let inputData = +prompt("Введите число от 0 до 1000");

function getPrimeNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Вы ввели не число";
  } else if (number > 1000 || number < 0) {
    return "Вы ввели число выходящее за пределы диапазона";
  } else if (number === 0 || number === 1) {
    return "Это число не является ни простым, ни составным";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Это не простое число";
    }
  }
  return "Это простое число";
}

console.log(getPrimeNumber(inputData));
