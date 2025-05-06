/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)

    for(let i = min; i >= 1; i--) {
        if (min % i === 0 && max % i === 0) {
            return i
        }
    }
    return 1
};

