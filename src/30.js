function calculateSum(numbers) {
    let total = 0;
    numbers.forEach((number) => {
        total += number;
    });
    return total;
}

console.log(calculateSum([1, 2, 3, 4])); // Output: 10
