const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(10)

console.log(arr)

function sort(){
    let sortedLastIndex = 0 , 
        flag = false,
        tmp;
    for(let i = 0 ; i < arr.length - 1; i++){
        sortedLastIndex = i
        for(let j = i + 1; j < arr.length ; j++){
            if(arr[sortedLastIndex] > arr[j]){
                sortedLastIndex = j
                flag = true
            }
        }
        if(flag){
            tmp = arr[i] 
            arr[i] = arr[sortedLastIndex]
            arr[sortedLastIndex] = tmp
            flag = false;
        }
    }
}

sort()

console.log(arr)