/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let cumCount=0;
    let oneCount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="1")oneCount++;
        else cumCount+=oneCount
    }
    return cumCount
};