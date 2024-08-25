/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const gasInput = gas.reduce((sum, currentValue) => sum + currentValue, 0)
    const totalFuelReq = cost.reduce((sum, currentValue) => sum + currentValue, 0)
    if (gasInput < totalFuelReq) return -1
    let fuelAvailbale = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        fuelAvailbale += gas[i] - cost[i];
        if (fuelAvailbale < 0) {
            fuelAvailbale = 0;
            start = i + 1
        }
    }
    return start
};