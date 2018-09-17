
/**
 * ** Review **
 * 
 * 1. `forEach` in Javascript cann't terminate(return) when the result is find, Use `break` in `for()` to 
 *     avoid redundant loops.  
 * 2. In the beginning, to minus the compute times, I want to filter the item who bigger than `target`「if(item[i]<target」,
 *    That's wrong, I forgot that `if one of them is negative, the result is smaller the item`.
 *  
 */


/** v 1.0 runtime 244ms  29/29, beats 12.34%! 🌚💊💊 */
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

/** 官网给出了三种解决方案 */



/** 
 *  V1
 *  一、暴力方案。
 *  原理上和我上面的实现方式相同，只不过更优雅和直观， 代码如下
 */
const V1 = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j];
            }
        }
    }

    throw new Error('No two sum solution');
}
/**
 *  简单一句话总结这种解决方案：`Loop through each element x and fid if there is another value that equals to target - -x `.
 *  所以这是一种 时间时间复杂度(O(n2))「每一个元素为了找另一个匹配项都要遍历剩余的数组空间」，空间复杂度为O(1)的算法实现。
 */



/**
 *  V2 
 * 
 */
/** v 2 runtime 116ms  29/29, beats 54.35%! 🍺  */
var V2 = function (nums, target) {

    let arrObj = nums.reduce((sum, cur, idx) => {
        if (sum[cur]) sum[cur].push(idx);
        else sum[cur] = [idx];
        return sum;
    }, {});

    let result;
    for (let i = 0; i < nums.length; i++) {
        const arrSec = arrObj[target - nums[i]];
        if (arrSec) {
            if (target / nums[i] !== 2) result = [i, arrSec[0]];
            else if (arrSec.length > 1) result = [arrSec[0], arrSec[1]];

            if (!result) {
                break;
            }
        }
    }
    return result;
};

/**
 * 经过改良之后的实现方式是这样：
 * 这个算法的时间已经提升到了10ms, 超过了99.98%的实现；
 * 但是这里有**漏洞**：并没有考虑相同元素的情况, 如target为6，数组中有n个3.
 * so, 反过来看这个算法的要求:
 * `Given an array of integers(一定会有重复元素),return indices of 
 * the two numbers such that they add up to a specific target(这里并没有要求第二个元素的index最小).
 * You may assume that each input would have exactly on solution, and you may not use the same element twice. `
 * 也就是说，下面这个实现，匹配的第二个元素的`index`一定是相同元素中`index`最大的。
 */
var V2_R = function (nums, target) {
    let arrObj = nums.reduce((sum, cur, idx) => {
        sum[cur] = idx;
        return sum;
    }, {});

    console.log(arrObj);

    let result = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (arrObj[complement] !== undefined && arrObj[complement] !== i) {
            result = [i, arrObj[complement]];
            break;
        }
    }
    return result;
};

/** 
 * 修改一下版本，保证`complement`的index最小
 * 这个算法52ms 超过 99.98%人， 胜利就在眼前了， 撒花
 */
var V2_R1 = function(nums, target) {
    
    let arrObj = nums.reduce((sum, cur, idx) => {  
        if(sum[cur] !== undefined) {
            if(typeof sum[cur] === 'number') sum[cur] = [sum[cur], idx];
            else sum[cur].push(idx);
        } else {
            sum[cur] = idx;
        }
        return sum;
    }, {});

    console.log(arrObj);

    
    let result = [-1, -1];
    for(let i=0; i<nums.length; i++){
        const item = nums[i];
        const complement = target - nums[i];
        const compObj = arrObj[complement];
        if(compObj) {
            if( item === complement) {
                if(compObj[1]) {
                    result = compObj.slice(0, 2);
                    break;
                } 
            } else{
                result = [i, compObj[0] || compObj];
                break;
            }
        } 
    }
    return result;  
};

var array = [3, 3];
var target = 6;

var result = V2_R1(array, target);
console.log(result);

