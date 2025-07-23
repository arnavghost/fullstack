function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Print first n Fibonacci numbers
function printSeries(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}

// Example: print first 10 numbers
printSeries(10);
