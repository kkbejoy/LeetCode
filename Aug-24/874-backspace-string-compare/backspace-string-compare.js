/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
   return buildStack(s)===buildStack(t)
};
function buildStack (word){
    const stack=[];
    for(let i=0;i<word.length;i++){
        if(word[i]==="#")stack.pop()
        else stack.push(word[i])
    }
    return stack.join()
}