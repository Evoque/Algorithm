var maxSubArray = function(nums) {
    let idxs = [];
    let former = undefined;
    for (let i = 0; i < nums.length; i++) {
        const idxLen = idxs.length;
        if (nums[i] > 0) {
            if (former !== undefined) {
                former = i;
                idxs[idxLen - 1] = i;
            }
            // former不存在, 判断初始化的情况
            else if (i - idxs[idxLen - 1] === 1 && i - idxs[idxLen - 2] === 2) {
                former = i;
                idxs[idxLen - 1] = i;
            }
            else {
                idxs.push(i);
            }
        } else {
            former = undefined;
        }
    }

    // idxs 中任意两个index取，subarray
    let maxVal = 0, maxI = 0, maxJ = 0;
    for (let i = 0; i < idxs.length; i++) {
        for (let j = i + 1; j < idxs.length; j++) {
            const subArr = nums.slice(idxs[i], idxs[j] + 1);
            const subSum = subArr.reduce((sum, cur) => {
                return sum + cur;
            }, 0); 

            if (subSum > maxVal) {
                maxI =  idxs[i];
                maxJ = idxs[j];
                maxVal = subSum;
            }
        }
    }  
    return maxVal;
};

var arr = [1];
var result = maxSubArray(arr);

console.log(result);