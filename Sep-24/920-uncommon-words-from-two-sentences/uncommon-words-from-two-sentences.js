/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
   const combined=s1.split(" ").concat(s2.split(" "))
   const unCommon=[]
   for(let i=0;i<combined.length;i++){
    if(combined.lastIndexOf(combined[i])===combined.indexOf(combined[i]))unCommon.push(combined[i])
   }
    return unCommon
};