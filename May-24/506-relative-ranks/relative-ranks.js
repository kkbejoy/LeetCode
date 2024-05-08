/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    let sortted=[...score].sort((a,b)=>b-a)
    const map= new Map()
    const ranks=["Gold Medal","Silver Medal","Bronze Medal"]
    let rank=0
    for(let i=0;i<score.length;i++){
        map.set(sortted[i],i<3? ranks[i] : `${rank+1}`)
        rank++
    }
    const answer=score.map((s)=>map.get(s))
    return answer
};