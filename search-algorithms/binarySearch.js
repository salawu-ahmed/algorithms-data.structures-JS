/**
 * 
 * @param {[]} arr 
 * @param {number} target 
 * @returns index 
 */
function binarySearch(arr, target) {
    if (arr.length == 0){
        return 1
    }
    let leftIndex = 0
    let rightIndex = arr.length - 1 
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((rightIndex + leftIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],5));
console.log(binarySearch([1,2,3,4,5,6,7,8,9],9));
console.log(binarySearch([1,2,3,4,5,6,7,8,9],56));