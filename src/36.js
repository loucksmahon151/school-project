function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  // Optimization: all primes are odd numbers
  if (num % 2 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function sumOfSquares(num) {
  let squareSum = 0;

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      squareSum += i * i;
    }
  }

  return squareSum;
}

console.log(sumOfSquares(5)); // Output: 30
