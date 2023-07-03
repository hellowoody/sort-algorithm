const A = [1,2,3,0,0,0],
    m = 3,
    B = [2,5,6],
    n = 3;

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let l = m - 1
    let r = n - 1
    for(let idx = m+n-1; idx >= 0 && r>=0;idx--){
        if(A[l] === undefined ||  A[l] <= B[r]){
            A[idx] = B[r]
            r--
        }else if(A[l] > B[r]){
            A[idx] = A[l]
            l--
        }
    }
};

merge(A,m,B,n)

console.log(A)