const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(10)

console.log(arr)

function sort(){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 1 ; j < arr.length - i ; j++){
            if(arr[j-1] > arr[j]){
                const tmp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = tmp
            }
        }

    } 
}

sort()

console.log(arr)