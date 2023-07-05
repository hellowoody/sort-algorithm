const nums = [1,4,3,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let min = max = nums[0]
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] > max){
            max = nums[i]
        }
        if(nums[i] < min){
            min = nums[i]
        }
    }

    if(min < 0){
        nums = nums.map(v => v - min)
        max -= min
    }else{
        min = 0
    }

    const totalBits = (max+"").length

    const sorted = new Array(nums.length)
    let bucket 
    for(let i = 1 , digit = 1 ; i <= totalBits ; i++,digit *= 10){
        bucket = new Array(10).fill(0)
        for(let j = 0 ; j < nums.length ; j++){
            const bucketIdx = Math.floor(nums[j]/digit)%10
            bucket[bucketIdx] += 1
        }
        for(let m = 1 ; m < 10 ; m++){
            bucket[m] += bucket[m-1]
        }
        for(let n = nums.length - 1 ; n >= 0 ; n--){
            const bucketIdx = Math.floor(nums[n]/digit)%10
            const idx = bucket[bucketIdx] - 1
            sorted[idx] = nums[n]
            bucket[bucketIdx] -= 1
        }
        nums.splice(0,nums.length,...sorted)
    }

    console.log(nums)
    let res = 0
    for(let i = 0; i < nums.length ; i+=2){
        res += nums[i] + min
    }
    return res
};


console.log(`数组${nums},(a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和为${arrayPairSum(nums)}`)