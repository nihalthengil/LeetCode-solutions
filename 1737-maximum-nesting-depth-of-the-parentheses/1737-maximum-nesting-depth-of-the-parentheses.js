/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let count = 0;
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            count++
            depth = Math.max(count,depth)
        } else if (s[i] == ")") {
            count--
        }
    }
    return depth
};