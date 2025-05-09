/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = []
    nums.sort((a, b) => a - b)
    while (nums.length > 0) {
        let alice = nums.shift()
        let bob = nums.shift()
        arr.push(bob)
        arr.push(alice)
    }
    return arr
};