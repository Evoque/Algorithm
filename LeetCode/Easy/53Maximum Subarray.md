
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

> ## 考虑不周全的地方
>
> 1. 边界条件没考虑进去，如: [1], [-2,1]
> 2. 子数组最大并不是子数组必需为整，nums全部为非正数的情况未考虑
> 3. 子数组单个项值最大，如[-1, 0, -2, 2], 其中2为最大



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
    return maxVal;
};

```

> 边界条件未健全： [1], [-2,1] 等情况

上面的解题思路有一部分是错的， 题目要求`子数组之和最大`，并没有要求子数组之和必需是整数，如果数组中包含的都是非负数，就需要找出其中最大的非负数作为结果！



上面的解决方案明显有问题。就算运行没问题，其复杂度也是无法忍受的。 



通过参考答案，得到解决方案2

### Version 2

这个算法在Jon Bentley的论文中有过讨论(Sep. 1984 Vol. 27 No. 9 Communications of the ACM P885), 思想如下:

The maximum is initially A[0]. Suppose we've solved the problem for A[1 .. i - 1]; how can we extend that to A[1 .. i]? The maximum
sum in the first I elements is either the maximum sum in the first i - 1 elements (which we'll call MaxSoFar), or it is that of a subvector that ends in position i (which we'll call MaxEndingHere).

MaxEndingHere is either A[i] plus the previous MaxEndingHere, or just A[i], whichever is larger.

1. 最大子数组之和的起始值为`A[0]`, 假设我们已经找出`A[1 .. i-1]` 的最大子数组之和，即`MaxSoFar`;
2. 那么

得到极其精简的代码：

```javascript
var maxSubArray = function(nums) {
    let maxSoFar=nums[0], maxEndingHere=nums[0];
    for (let i=1;i<nums.length;++i){
    	maxEndingHere= Math.max(maxEndingHere+nums[i],nums[i]);
    	maxSoFar=Math.max(maxSoFar, maxEndingHere);	
    }
    return maxSoFar;
};
```



上面代码运用的思想是`Dynamic Programming`，不能完全理解`maxEndingHere`的原理， 所以先滚去看`Dynamic Programming` 再回头做这一题。



## 总结

1. 稍微复杂一点的算法，按照现有的惯性思维(遍历、递归等)得到的解决方案不一定是最好的，或者根本就是错的；
2. 如果能为一个算法找到匹配的数学原理，那这个算法往往是健壮的，性能高的。
3. **归纳总结**是解决算法的一个重要方法。



