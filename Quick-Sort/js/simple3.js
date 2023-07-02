let arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(10)

console.log(arr)


function sort(){
    quickSort(arr,0,arr.length-1)
}

function quickSort(arr,start,end){

    if(start >= end){
        return 
    }
    // 每一轮排序后，都要定位pivot所在位置，然后再对其左右两侧的数组分别排序
    const {leftIdx,rightIdx} = partition(arr,start,end)

    // 根据基准元素位置，分成两部分递归排序
    quickSort(arr,start,leftIdx-1)
    quickSort(arr,rightIdx+1,end)

}

function partition(arr,start,end){
    let i = leftIdx = start,
        rightIdx = end-1;
    // 取第一个位置的元素作为基准元素
    const pivot = arr[end];

    while(i <= rightIdx){
        
        if(arr[i] < pivot){
            const tmp = arr[i]
            arr[i] = arr[leftIdx]
            arr[leftIdx] = tmp
            leftIdx++
            i++
        }else if(arr[i] > pivot){
            const tmp = arr[i]
            arr[i] = arr[rightIdx]
            arr[rightIdx] = tmp

            rightIdx--
        }else{
            i++
        }
    }

    arr[end] = arr[leftIdx]
    arr[leftIdx] = pivot

    return {
        leftIdx,
        rightIdx
    }
}

sort()

console.log(arr)