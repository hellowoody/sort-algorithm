const arr1 = [2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31]
const arr2 = [2,42,38,0,43,21]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let max
    for(let i = 0 ; i < arr1.length ; i++){
        if(i===0){
            max = arr1[0]
        }
        if(arr1[i] > max){
            max = arr1[i]
        }
    }
    const bucket = countingSort(arr1,max)

    let idx = 0
    for(let i = 0 ; i < arr2.length ; i++){
        while(bucket[arr2[i]]){
            arr1[idx] = arr2[i]
            idx++
            bucket[arr2[i]] -= 1
        }
    }
//  console.log(arr1)
    bucket.forEach((v,index) => {
        // console.log("==>",v,index)
        while(v){
            arr1[idx] = index
            idx++
            v--
        }
    })

    // console.log(arr1)
    return arr1
};

function countingSort(arr,max){
    const bucket = new Array(max+1)
    let idx = 0
    for(let i = 0 ; i< arr.length;i++){
        if(String(bucket[arr[i]]) === "undefined"){
            bucket[arr[i]] = 1
        }else{
            bucket[arr[i]] += 1
        }
    }

    return bucket
}


console.log(`arr1:[${arr1}] \narr2:[${arr2}] \n ${relativeSortArray(arr1,arr2)}`)