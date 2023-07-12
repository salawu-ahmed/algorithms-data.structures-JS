/**
 * 
 * @param {number} n 
 * @returns number
 */

function factorial(n) {
    if ( n == 0) {
        return 1;
    }
    let sum = 1;
    for(let i = 1; i <= n; i++){
        sum = sum * i;
    }
    return sum
}

console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))

// the time complexity is O(n) 