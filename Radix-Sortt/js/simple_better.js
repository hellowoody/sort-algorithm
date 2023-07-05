let arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*150))
    }
}

initData(10)
// arr = [ 78, 121, 6, 118, 0, 36 ]
console.log(arr)

function sort(){
    let max = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    let totalPos = (max+"").length
    // console.log(totalPos)
    const sortArr = new Array(arr.length)

    for(let i = 1 , digit = 1 ; i <= totalPos ; i++, digit *= 10){
        const bucket = new Array(10).fill(0) // 存放个位，十位，百位。。。的数在桶排序中的个数
        for(let m = 0 ; m < arr.length ; m++){
            let bucketIdx = Math.floor(arr[m]/digit)%10
            bucket[bucketIdx] += 1
        }
        // console.log("bucket:",bucket)
        // important: 让bucket_tmp不仅记录个数，同时能代表索引值
        for(let n = 1 ; n < 10 ; n++){
            bucket[n] += bucket[n-1]
        }
        // important: 必须是倒序遍历，因为这样会先取出把上一轮排序后的大值，这样会保证上一轮相同基数的排序位置
        for(let j = arr.length - 1  ; j >= 0 ; j--){
            let bucketIdx = Math.floor(arr[j]/digit)%10
            let idx = bucket[bucketIdx]-1
            sortArr[idx] = arr[j]
            bucket[bucketIdx] -= 1
        }
        arr.splice(0,arr.length,...sortArr)
        // console.log("===>",arr)
    }
}

sort()

console.log(arr)