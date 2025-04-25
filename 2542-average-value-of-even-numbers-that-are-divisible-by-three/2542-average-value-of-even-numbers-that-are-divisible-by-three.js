/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let value = nums
    let sum = 0
    let count = 0
    for(let i = 0;i < value.length;i++){
        if(value[i] % 2 === 0 && value[i] % 3 === 0){
            sum += value[i]
            count++
        }
    }
    return count === 0 ? 0 :Math.floor(sum/count)
};