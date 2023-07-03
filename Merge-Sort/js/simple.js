const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(6)

console.log(arr)

function mergeSort(arr){
    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length/2),
        left = arr.slice(0,mid),
        right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){
    const res = []
    let i = j = 0 ;

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }

    while(i < left.length){
        res.push(left[i])
        i++
    }

    while(j < right.length){
        res.push(right[j])
        j++
    }

    return res
}

function merge_bak(left,right){
    const res = []

    while(left.length && right.length){
        if(left[0] <= right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }

    while(left.length){
        res.push(left.shift())
    }

    while(right.length){
        res.push(right.shift())
    }

    return res
}


console.log(mergeSort(arr))