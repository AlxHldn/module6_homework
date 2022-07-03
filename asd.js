let num = 2;
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "это не простое число ";
    }
  }
  return "это простое число";
}
console.log(isPrime(num));
