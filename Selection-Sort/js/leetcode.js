const nums = [3,2,1,5,6,4]
const k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    let sortedLastIndex = 0,tmp;
    for(let i = 0 ; i < nums.length - 1 ; i++){
        sortedLastIndex = i;
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[sortedLastIndex] < nums[j]){
                sortedLastIndex = j
            }
        }
        if(sortedLastIndex !== i){
            tmp = nums[sortedLastIndex]
            nums[sortedLastIndex] = nums[i]
            nums[i] = tmp
        }
        // console.log(nums,i)
        if(i === k-1){
            return nums[i] 
        }
    }
    return nums[nums.length-1]
}

console.log(findKthLargest(nums,k))