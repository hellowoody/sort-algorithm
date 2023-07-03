const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(5)

console.log(arr)

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let count = 0
    mergeSort(nums)

    function mergeSort(p){
        if(p.length < 2) return p
        const mid = Math.floor(p.length/2),
            left = p.slice(0,mid),
            right = p.slice(mid)
        return merge(mergeSort(left),mergeSort(right))
    }

    function merge(left,right){
        const res = []
        let i = j = 0
        while(i < left.length && j < right.length){  
            if(left[i] <= right[j]){
                res.push(left[i])
                i++
            }else{
                for(let idx = i; idx<left.length; idx++){
                    console.log("逆序对",left[i],right[j])
                }
                res.push(right[j])
                j++
                // 归并升序排序，因为左侧的数组和右侧数组都是升序数组
                // 所以当left的某一元素大于right数组的某一个元素，就说明left的该元素以及后面的元素都比right的该元素大
                count += left.length - i 
            }
        }

        while(i < left.length) {
            res.push(left[i])
            i++
        }

        while(j < right.length){
            res.push(right[j])
            j++
        }
    
        return res
    }
    return count
};


console.log(`数组${arr}中,逆序对的总数:${reversePairs(arr)}`)
