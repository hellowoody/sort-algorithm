const score = [10,3,8,9,4]

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sorted = [...score]

    for(let gap = Math.floor(sorted.length/2) ; gap > 0 ; gap = Math.floor(gap/2)){
        for(let i = gap ; i < sorted.length ; i++){
            for(let j = i - gap ; j >= 0 ; j -= gap){
                if(sorted[j] < sorted[j+gap]){
                    [sorted[j],sorted[j+gap]] = [sorted[j+gap],sorted[j]]
                }
            }
        }
    }
    // console.log(sorted,score)
    const answer = score.map(item => {
        let v = sorted.indexOf(item)
        switch(v){
            case 0:
                v = "Gold Medal";
                break;
            case 1:
                v = "Silver Medal";
                break;
            case 2:
                v = "Bronze Medal";
                break;
            default:
                v = (v+1).toString()
        }
        return v;
    })
    return answer
};

console.log(score)
console.log(findRelativeRanks(score))