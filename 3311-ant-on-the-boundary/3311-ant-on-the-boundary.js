/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let position = 0
    let NoOfReach = 0
    for(let i = 0;i < nums.length; i++){
         position += nums[i]
         if(position === 0){
            NoOfReach++
         }   
        }
        return NoOfReach
    } 
