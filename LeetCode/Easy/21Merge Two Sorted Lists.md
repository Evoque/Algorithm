## Merge Two Sorted Lists

我的解法是

- 遍历l1
- l1Item<l2Item, 添加l1Item到结果
- l1Item === l2Item, 添加两者到结果
- l1Item>l2Item, 添加l2Item到结果
- 如果期间l2已经遍历完，添加l1剩余部分到结果，结束遍历
- 完成l1遍历之后，如果l2中还有剩余，添加到结果，完成

代码如下:

```javascript
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l1.length) return l2;
    if(!l2 || !l2.length) return l1;
    
    let indexLeft = 0, lenLeft = l1.length,
        indexRight = 0, lenRight = l2.length,
        result = [];
    
    while(indexLeft<l1.length) { 
        // l2 finish, concat l1 left
        if(indexRight >= lenRight) {
            result = result.concat(l1.slice(indexLeft));
            break;
        }
        
        const l1Item = l1[indexLeft];
        const l2Item = l2[indexRight];
        
        if(l1Item < l2Item) {
            result.push(l1Item);
            indexLeft++;
        } 
        else if(l1Item === l2Item){
            result.push(l1Item, l2Item); 
            indexLeft++;
            indexRight++;
        } else if(l1Item > l2Item) {
            result.push(l2Item);
            indexRight++;
        }
        
    }
    
    // l1 finish, concat l2 left
    if(indexRight < lenRight-1) {
        result = result.concat(l2.slice(indexRight));
    }
    
    return result;
    
};
```

奇怪的是， 我在本机开发环境和`leetcode`给出的调试环境中都能得到正确的结果，但是`Run Code`和`Submit Solution`都判断我的代码执行有错， 不明白错误原因在哪里， 已提交讨论，希望有人能够解答。 

决定用`C#`重写一遍看是否会出现同样的情况。