/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const mapper = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapper.has(nums[i])) {
            mapper.set(nums[i], mapper.get(nums[i]) + 1)
        }
        else mapper.set(nums[i], 1)
    }
   
    for (let [key,value] of mapper){
        if(value<2 ) return key
    }
    
}