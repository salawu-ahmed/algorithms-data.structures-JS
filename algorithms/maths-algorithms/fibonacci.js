/**
 * 
 * @param {number} n 
 * @returns []
 */
function fibonacciSequence(n){
    const fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}

console.log(fibonacciSequence(2))
console.log(fibonacciSequence(4))
console.log(fibonacciSequence(12))