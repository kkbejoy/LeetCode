/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.size = nums.length;
    this.prefixSumArray = [];
    this.prefixSumArray[0] = nums[0]

    for (let i = 1; i < this.size; i++) {
        this.prefixSumArray.push(this.prefixSumArray[i - 1] + nums[i])
    }
    console.log(this.prefixSumArray)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if(left==0) return this.prefixSumArray[right]
    return this.prefixSumArray[right] - this.prefixSumArray[left - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */