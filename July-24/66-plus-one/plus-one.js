/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let allDigits = true
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== 9) {
            allDigits = false
            break;
        }
    }
    if (allDigits) {
        for (let i =1; i < digits.length; i++) {
            digits[i] = 0    
        }
        digits[0] = 1
        digits[digits.length] = 0
        return digits
    }
    return recursiveCorrection(digits, digits.length - 1)
};

const recursiveCorrection = (digits, position) => {
    if(position<0)return digits
    if (digits[position] !== 9) {
        digits[position] = digits[position] + 1
        return digits
    }
   else  if(position===0){
        digits[0]= digits[0]+1
        return digits
    }
    else {
        digits[position]= 0
        recursiveCorrection(digits, position - 1)}
    return digits
}