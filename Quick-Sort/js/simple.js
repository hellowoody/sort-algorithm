let arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(5)

console.log(arr)


function sort(){
    quickSort(arr,0,arr.length-1)
}

function quickSort(arr,start,end){

    if(start >= end){
        return 
    }
    // 每一轮排序后，都要定位pivot所在位置，然后再对其左右两侧的数组分别排序
    const pivotIdx = partition(arr,start,end)

    // 根据基准元素位置，分成两部分递归排序
    quickSort(arr,start,pivotIdx-1)
    quickSort(arr,pivotIdx+1,end)

}

function partition(arr,start,end){
    let left = start,
        right = end;
    // 取第一个位置的元素作为基准元素
    const pivot = arr[start];

    while(left < right){
        /*
            注：
            当首先从右边开始先执行时，循环的条件是:
            while(arr[right] > pivot &&  left < right){
                right--
            }
            最后left、right停留的位置的值肯定是要小于 pivot 的此时交换移动后的索引left和最左边元素pivot符合将小于的值放到pivot左边这一条件

            当首先从左边开始执行时
            while(arr[left] <= pivot && left < right){
                left++
            }
            循环结束后的left right碰面的时的值肯定是要 大于 pivot的 此时再交换 相当于把比大的值放到了pivot左边 也就违背了快排的条件

            所以如果想先从左往右查找，只需把key设置在右侧即可。

        */

        //控制右侧指针比较并左移
        while(arr[right] > pivot &&  left < right){
            right--
        }
         
        //控制左侧指针比较并右移
        while(arr[left] <= pivot && left < right){
            left++
        }
        
        
        // 跳出上面两个循环后，说明左右指针都不动了.
        // 这时如果左右指针还未重合,就要交换左右指针所指向的元素
        if(left < right){
            const tmp = arr[left]
            arr[left] = arr[right]
            arr[right] = tmp
        }
    }

    // 左右指针重合，交换指向元素和基准元素pivot
    arr[start] = arr[left]
    arr[left] = pivot

    return left
}

sort()

console.log(arr)