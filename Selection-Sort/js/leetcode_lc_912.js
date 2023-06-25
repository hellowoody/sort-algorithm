const arr = [5,2,3,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let sortedLastIndex,tmp;
    for(let i = 0 ; i < nums.length - 1 ; i++){
        sortedLastIndex = i
        for(let j = i+1 ; j < nums.length ; j++){
            if(nums[sortedLastIndex] > nums[j]){
                sortedLastIndex = j
            }
        }

        if(sortedLastIndex !== i){
            tmp = nums[i]
            nums[i] = nums[sortedLastIndex]
            nums[sortedLastIndex] = tmp
        }
    }
    return nums
};


console.log(sortArray(arr))