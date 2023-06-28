const nums = [3,2,1,5,6,4]
const k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for(let i = Math.floor(nums.length/2)-1 ; i >=0 ; i--){
        heapify(nums,i,nums.length)
    }

    for(let i = nums.length-1 ; i >= 0 ; i--){
        k -= 1
        if(k == 0){
            return nums[0]
        }
        const tmp = nums[i]
        nums[i] = nums[0]
        nums[0] = tmp
        heapify(nums,0,i)
    }
    return nums[0]
};


var heapify = function(arr,idx,len){
    const left = 2*idx + 1
    const right = 2*idx + 2
    let parent = idx

    if(left < len && arr[left] > arr[parent]){
        parent = left
    }

    if(right < len && arr[right] > arr[parent]){
        parent = right
    }

    if(parent !== idx){
        const tmp = arr[idx]
        arr[idx] = arr[parent]
        arr[parent] = tmp
        heapify(arr,parent,len)
    }
}


console.log("预期是5,结果为:",findKthLargest(nums,k))  // 预期是5