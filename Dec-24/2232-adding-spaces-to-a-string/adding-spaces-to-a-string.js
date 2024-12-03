/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
   const s1=[]
    for(let i=0;i<spaces.length;i++){
     s1.push( s.slice(spaces[i-1],spaces[i]))
    }
    s1.push(s.slice(spaces[spaces.length-1]))
    return s1.join(" ")
};