const nums = [5,2,3,1]

var sortArray = function(nums) {
    
    quicksort(nums,0,nums.length-1)

    return nums
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



console.log(sortArray(nums))