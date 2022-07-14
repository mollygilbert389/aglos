// need to come back to this one
function minIncrementUniqueFunc(arr) {
    let uniqueNums = {};
    let increments = 0;
    
    arr.forEach((_i, idx, nums) => {
        while (uniqueNums[nums[idx]] === true) {
            nums[idx] += 1;
            increments++;
        }
        
        uniqueNums[nums[idx]] = true;
    })
    
    return increments;
}

module.exports = { minIncrementUniqueFunc }