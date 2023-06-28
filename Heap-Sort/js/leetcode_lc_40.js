const arr = [3,2,1]
const k = 2

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    for(let i = Math.floor(arr.length/2) - 1 ; i >=0 ; i--){
        heapify(arr,i,arr.length)
    }
    const res = []
    for(let i = arr.length - 1 ; i >= 0; i--,k--){
        
        if(k === 0){ 
            return res
        }
        res.push(arr[0])

        const tmp = arr[i]
        arr[i] = arr[0]
        arr[0] = tmp

        heapify(arr,0,i)
    }
    console.log(arr)
    return res
};

var heapify = (arr,idx,len) => {
    const left = 2*idx + 1
    const right = 2*idx + 2
    let parent = idx

    if(left < len && arr[left] < arr[parent]){
        parent = left
    }

    if(right < len && arr[right] < arr[parent]){
        parent = right
    }

    if(parent !== idx){
        const tmp = arr[idx]
        arr[idx] = arr[parent]
        arr[parent] = tmp
        heapify(arr,parent,len)
    }
}

console.log(`${arr}数组中，最小的 ${k} 个数:`,getLeastNumbers(arr,k))