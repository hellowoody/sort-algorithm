const nums = [2,2,1,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    quickSort(nums,0,nums.length-1)

    return nums[Math.floor(nums.length/2)]
};

function quickSort(arr,start,end){
    if(start >= end) return 

    const {leftIdx,rightIdx} = partition(arr,start,end)

    quickSort(arr,start,leftIdx-1)
    quickSort(arr,rightIdx,end)
}

function partition(arr,start,end){
    const pivot = arr[start]
    let i = leftIdx = start,
        rightIdx = end + 1;

    while(i < rightIdx){
        if(arr[i] < pivot){
            const tmp = arr[leftIdx+1]
            arr[leftIdx+1] = arr[i]
            arr[i] = tmp
            i++
            leftIdx++
        }else if(arr[i] > pivot){
            const tmp = arr[rightIdx-1]
            arr[rightIdx-1] = arr[i]
            arr[i] = tmp
            rightIdx--
        }else{
            i++
        }
    }
    arr[start] = arr[leftIdx]
    arr[leftIdx] = pivot

    return {
        leftIdx,
        rightIdx
    }
}


console.log(`返回${nums}的多数元素`,majorityElement(nums))