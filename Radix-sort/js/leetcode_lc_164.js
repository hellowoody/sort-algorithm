const nums = [3,6,9,1]

var maximumGap = function(nums) {
    if(nums.length < 2) return 0

    let max= nums[0]
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] > max) max = nums[i]
    }
    const totalPos = (max+"").length
    const sortedArr = new Array(nums.length)

    for(let i =1, digit=1 ; i <= totalPos ; i++,digit *= 10){
        const bucket = new Array(10).fill(0)

        for(let j = 0 ; j < nums.length ; j++){
            let bucketIdx = Math.floor(nums[j]/digit)%10
            bucket[bucketIdx] += 1
        }

        for(let m = 1 ; m < 10 ; m++){
            bucket[m] += bucket[m-1]
        }

        for(let n = nums.length - 1 ; n >= 0 ; n--){
            const bucketIdx = Math.floor(nums[n]/digit)%10
            const idx = bucket[bucketIdx] - 1
            sortedArr[idx] = nums[n]
            bucket[bucketIdx] -= 1 
        }

        nums.splice(0,nums.length,...sortedArr)
    }
    // console.log(nums)
    let res = 0
    for(let i = 1 ; i < nums.length ; i++ ){
        if(nums[i] - nums[i-1] > res){
            res = nums[i] - nums[i-1]
        }
    }
    return res
};


console.log(`数组${nums},相邻元素之间最大的差值:`,maximumGap(nums))