const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(5)

console.log(arr)

function sort(){
    // 根据满二叉树的定理，假设父节点索引为i，它的左节点索引为 2i+1，右节点索引为 2i+2
    // 如果数组长度n，那最后一个元素的索引就是n-1
    // 根据上面两行可以得出 n-1 = 2i+1 或者 n-1 = 2i+2
    // 因为你不知道最后一个元素在二叉树的左子节点还是右子节点
    /*
        n-1 = 2i+1
        n-2 = 2i
        i = n/2 - 1

        or

        n-1 = 2i+2
        n-3 = 2i
        i = n/2 - 3/2  因为索引肯定为整数，所以3/2可以看成 1
        i = n/2 - 1
    */
    // 所以可以拿到满二叉树的最后一个非叶子节点的索引是 n/2-1
    for(let i = Math.floor(arr.length/2) - 1 ; i >= 0 ; i--){
        heapify(arr,i,arr.length)
    }

    for(let i = arr.length-1 ; i >=0 ; i--){
        const tmp = arr[i]
        arr[i] = arr[0]
        arr[0] = tmp

        heapify(arr,0,i)
    }

}
/*
    堆化let 
    堆的特点是父节点比子节点都大
*/ 
function heapify(arr,idx,len){
    const leftIdx = 2*idx + 1;
    const rightIdx = 2*idx + 2;
    let parentIdx = idx
    if(leftIdx < len && arr[leftIdx] > arr[parentIdx]){
        parentIdx = leftIdx
    }

    if(rightIdx < len && arr[rightIdx] > arr[parentIdx]){
        parentIdx = rightIdx
    }
    if(parentIdx !== idx){
        const tmp = arr[idx]
        arr[idx] = arr[parentIdx]
        arr[parentIdx] = tmp

        heapify(arr,parentIdx,len)
    }

}

sort()

console.log(arr)