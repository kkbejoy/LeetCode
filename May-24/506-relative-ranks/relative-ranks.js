/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let answer= []
    let sortted=[...score]
    sortted.sort((a,b)=>b-a)
    const ranks=["Gold Medal","Silver Medal","Bronze Medal"]
    for(let i=0;i<score.length;i++){
        answer[score.indexOf(sortted[i])]=(i<3?ranks[i]:`${i+1}`)
    }
    return answer
};