/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return []
    const visited=[]
     const result=postOrderTraversal(root,visited)
     return result.concat([root.val])
};

function postOrderTraversal (node,visited){
if(!node) return
for(let i=0;i<node.children.length;i++){
    postOrderTraversal(node.children[i],visited)
    visited.push(node.children[i].val)
}
return visited
}