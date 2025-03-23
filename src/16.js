function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimeFactors(num) {
    let primeFactors = [];
    for (let factor = 2; num > 1 && factor * factor <= num; factor++) {
        while (num % factor === 0) {
            if (isPrime(factor)) {
                primeFactors.push(factor);
            }
            num /= factor;
        }
    }

    return primeFactors;
}

function getNthPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let nextNum = i + 2;
        if (!isPrime(nextNum)) continue;

        while (nextNum % 2 === 0) {
            nextNum /= 2;
        }

        if (isPrime(nextNum)) {
            count++;
        }
    }

    return count > 0 ? Math.floor(count / 2) : -1;
}

console.log(getNthPrime(5)); // Output: 3
