
/**
 * ** Review **
 * 
 * 1. `forEach` in Javascript cann't terminate(return) when the result is find, Use `break` in `for()` to 
 *     avoid redundant loops.  
 * 2. In the beginning, to minus the compute times, I want to filter the item who bigger than `target`「if(item[i]<target」,
 *    That's wrong, I forgot that `if one of them is negative, the result is smaller the item`.
 *  
 */


/** v 1.0 runtime 244ms  29/29, beats 🌚💊💊 */
const twoSum = function (nums, target) {
    let result = undefined;
    for (let i = 0; i < nums.length - 1; i++) {
        const item = nums[i];
        const remain = target - item;
        const remainIdx = nums.slice(i + 1).indexOf(remain);
        if (remainIdx !== -1) {
            result = [i, remainIdx + i + 1];
            break;
        }
    }
    return result;
};

var arr = [2, 7, 11, 15];
var target = 9;
// var arr = [-1, -2, -3, -4, -5];
// var target = -8;

var result = twoSum(arr, target);

console.log(result);