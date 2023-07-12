function insertionSort (arr) {
    for(let i=0; i<arr.length; i++){
        let item = arr[i]
        let j
        for(j=i-1; j>=0 && arr[j]>item; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = item
    }
    return arr
}

console.log(insertionSort([2,6,5,3,8,7]))