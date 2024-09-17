/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const combined=s1.split(" ").concat(s2.split(" "))
  const map=new Map();

  for(let i=0;i<combined.length;i++){
    const word=combined[i]
    if(map.has(word)) map.set(word,map.get(word)+1)
    else map.set(word,1)
  }
  const unCommon=[]
  map.forEach((value,key)=>{
    if(value===1) unCommon.push(key)
  })
  return unCommon
};