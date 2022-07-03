//Вариант 1

let number = 1.4;
let power = 5;

let result = (a, b) => Math.pow(a, b);

console.log(result(number, power));

//Вариант 2

let number2 = +prompt("Введите число");
let power2 = +prompt("Введите степень");

let res = (a, b) => {
  let result = 1;
  for (i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
};

console.log(res(number2, power2));

//Вариант 3

let number3 = 1.4;
let power3 = 5;

let result3 = (a, b) => console.log(a ** b);

result3(number3, power3);
