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
    let l = m - 1,
        r = n - 1,
        idx = A.length - 1;
    while(l >=0 && r >= 0){
        if(A[l] <= B[r]){
            A[idx] = B[r]
            idx--
            r--
        }else{
            A[idx] = A[l]
            idx--
            l--
        }
    }

    while(r >= 0){
        A[idx] = B[r]
        idx--
        r--
    }
    return A
};

merge(A,m,B,n)

console.log(A)