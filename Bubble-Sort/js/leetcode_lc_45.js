const nums = [3,30,34,5,9]

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 1 ; j < nums.length - i ; j++){
            if(nums[j-1].toString() + nums[j].toString() > nums[j].toString() + nums[j-1].toString()){
                const tmp = nums[j-1]
                nums[j-1] = nums[j]
                nums[j] = tmp
            }
        }
    }
    return nums.join('')
};

console.log(minNumber(nums))