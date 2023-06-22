/**
 * 
 * @param {number} n 
 * @returns bool
 */
function isPrime(n) {
    if(n < 2){
        return false
    }
    for (let i = 2; i < n; i++){
        if(n % i == 0){
            return false
        }
    }
    return true
} 

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));

// time complexity is O(n)