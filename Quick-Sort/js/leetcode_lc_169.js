const nums = [2,2,1,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    quicksort(nums,0,nums.length-1)
    return nums[Math.floor(nums.length/2)]
};

function quicksort(arr,start,end){
    if(start >= end){
        return 
    }

    const pivotIdx = partition(arr,start,end)

    quicksort(arr,start,pivotIdx-1)
    quicksort(arr,pivotIdx+1,end)
}

function partition(arr,start,end){
    let leftIdx = start , rightIdx = end
    const pivot = arr[start]

    while(leftIdx < rightIdx){
        while(arr[rightIdx] > pivot && leftIdx < rightIdx){
            rightIdx--
        }

        while(arr[leftIdx] <= pivot && leftIdx < rightIdx){
            leftIdx++
        }

        if(leftIdx < rightIdx){
            [arr[leftIdx],arr[rightIdx]] = [arr[rightIdx],arr[leftIdx]]
        }
    }

    arr[start] = arr[leftIdx]
    arr[leftIdx] = pivot
    return leftIdx
}


console.log(`返回${nums}的多数元素`,majorityElement(nums))