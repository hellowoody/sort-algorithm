const arr = [0,1,0,3,12]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length - i ; j++){
            if(nums[j] === 0){
                nums.splice(j,1)
                nums.push(0)
                break
            }
        }
    }
    return nums
};

console.log(moveZeroes(arr))