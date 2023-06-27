const arr = []

function initData(count){
    for(let i = 0 ; i < count ; i++){
        arr.push(Math.floor(Math.random()*50-20))
    }
}

initData(10)

console.log(arr)


function sort(){
    for(let gap = Math.floor(arr.length/2) ; gap > 0 ; gap = Math.floor(gap/2)){
        for(let i = gap ; i < arr.length ; i++){
            // for(let j = i - gap ; j >= 0 && arr[j] > arr[j+gap] ; j -= gap){
            //     [arr[j],arr[j+gap]] = [arr[j+gap],arr[j]]
            // }
            for(let j = i - gap ; j >= 0 ; j -= gap){
                if( arr[j] > arr[j+gap] ){
                    [arr[j],arr[j+gap]] = [arr[j+gap],arr[j]]
                }
            }
        }
    }
}

sort()

console.log(arr)