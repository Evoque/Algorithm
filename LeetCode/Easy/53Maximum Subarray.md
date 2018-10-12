
## Maximum Subarray

取一个整数数组的子数组，此子数组之和最大， 示例如下：
``` 
[-2,1,-3,4,-1,2,1,-5,4] => 最大子数组为 [4,-1,2,1], result为6
```

### Version 1
经过简单的分析，发现如下规律:
1. 子数组一定是`正数`开头
2. 子数组一定是`正数`结尾
3. 相邻两个以上的正数，头尾之间的正数一定不会是子数组的开头或结尾
4. 获取所有符合条件3的正数索引，得到相应的子数组，对比值，得到最大结果

得到如下代码:
```javascript

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
    return nums.slice(maxI, maxJ + 1);
};

```

运行之后，简单的测试用例可以通过， 但是`Submit Solution`的批量测试未通过，也未说明原因。 
