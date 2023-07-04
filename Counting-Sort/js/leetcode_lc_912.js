const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(6)

console.log(arr)

var sortArray = function(nums) {
    
    let min = max = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(i === 0) min = max = nums[i]

        if(nums[i] > max) max = nums[i]

        if(nums[i] < min) min = nums[i]
    }

    if(min < 0){
        nums = nums.map(v => v-min)
        max -= min
    }else{
        min = 0
    }

    return countingSort(nums,max,min)
};


function countingSort(arr,max,min){
    // console.log(max,min)
    const bucket = new Array(max+1)
    let sortedIdx = 0

    for(let i = 0 ; i < arr.length ; i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]] = 1
        }else{
            bucket[arr[i]]++
        }
    }

    for(let j = 0 ; j < bucket.length ; j++){
        while(bucket[j] > 0){
            arr[sortedIdx] = j + min
            sortedIdx++
            bucket[j]--
        }
    }
    return arr
}



console.log(sortArray(arr))
