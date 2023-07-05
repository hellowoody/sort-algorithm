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
    const bucket = new Array(10)

    for(let i = 1 , digit = 1 ; i <= totalPos ; i++, digit *= 10){
        for(let m = 0 ; m < arr.length ; m++){
            let bucketIdx = Math.floor(arr[m]/digit)%10
            // console.log("bucketIdx:",bucketIdx,bucket[bucketIdx])
            if(!bucket[bucketIdx]){
                bucket[bucketIdx] = [arr[m]]
            }else{
                bucket[bucketIdx].push(arr[m])
            }
        }
        // console.log("bucket:",bucket)
        let idx = 0
        for(let n = 0 ; n < 10 ; n++){
            while(bucket[n] && bucket[n].length > 0){
                arr[idx] = bucket[n].shift()
                idx++
            }
        }
        console.log(arr)
    }
}

sort()