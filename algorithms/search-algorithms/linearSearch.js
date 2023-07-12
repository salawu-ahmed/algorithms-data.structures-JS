/**
 * 
 * @param {[]} arr 
 * @param {number} target 
 * @returns index
 */

function linearSearch(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === target){
            return index
        }
    }
    return -1
}

console.log(linearSearch([3,4,34,6], 3));
console.log(linearSearch([3,4,34,6], 2));
console.log(linearSearch([3,4,34,6], 34));