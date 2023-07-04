const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50))
    }
}

initData(10)

console.log(arr)


function sort(){
    let maxVal

    arr.forEach((v,i) => {
        if(i === 0){
            maxVal = v
        }
        if(v > maxVal){
            maxVal = v
        }
    })

    return countingSort(arr,maxVal)
}

function countingSort(arr,maxVal){
    const bucket = new Array(maxVal+1)
    let sortedIdx = 0
    
    for(let i = 0 ; i < arr.length ; i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]] = 1
        }else{
            bucket[arr[i]]++
        }
    }

    for(let j = 0 ; j < bucket.length; j++){
        while(bucket[j] > 0){
            arr[sortedIdx] = j;
            sortedIdx++
            bucket[j]--
        }
    }

    return arr
}

console.log(sort())