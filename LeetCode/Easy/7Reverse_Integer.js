

/**
 * 
 * v 1.0
 * 直觉最优的解决办法是按照二进制位进行换算， 但是进制的相关概念已经模糊， 先用暴力方法写一下
 * 
 * 转化为字符串， 然后进行反转
 */

/** 
 *  ** 76ms 1032/1032 beats 73.52% **
 *  
 *  Time Complexity:  O(n) -- 对字符串数组进行遍历
 *  Space Complexity: O(n) -- 存储数字对应的 `char`
 * 
 * */
var reverse = function (x) {
    let startIdx = 0;
    let startSign = '';
    if (x < 0) {
        startIdx = 1;
        startSign = '-';
    }

    const xStr = x.toString();
    const len = xStr.length;
    let resArr = [];
    for (let i = startIdx; i < len; i++) {
        resArr[len - i - 1] = xStr[i];
    }
  

    const result = Number.parseInt(startSign + resArr.join(''));

    if (result < -Math.pow(2, 31) || result >= Math.pow(2, 31)) {
        return 0;
    }

    return result;
};

var result = reverse(-123);
