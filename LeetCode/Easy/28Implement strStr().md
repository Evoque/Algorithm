## Implement strStr()

如 `hello`, needle='ll',  return 2;



分析：

1. 需要对`haystack`进行遍历
2. 需要一个指针存储与`needle`的第几位进行对比
3. 当指针对比完成时得到结果

经过尝试，得到下面代码：

```javascript
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    
    let result = -1;
    let headNeedle = 0;
    for(let i=0; i<haystack.length; i++) {
        if(haystack[i] === needle[headNeedle]) { 
            if(headNeedle === needle.length-1) {
                result = i - needle.length + 1;
                break;
            } 
            headNeedle++;
        } else {
            headNeedle = 0;
        }
    }
    return result;
};
```



发现通不过复杂的测试用例。发现遗漏了一个特别重要的边界条件， 也就是当匹配到不相等项的时候，应该从下一个起始项重新开始匹配， 即：

`haystack`: 'mississippi'; `needle`: 'issip'；在`haystack`中字母`i`的`index`分别为`1, 4, 7, 10`, 也就是说应该分别从这些`index`中分别进行比对。

顺序遍历`haystack`的思路是完全错误的。 

so，又想出了下面的解决方案：

1. 遍历`mississippi`，得到所有`needle[0]`的`index`位置(index后的元素数量小于needle长度时不记录)；
2. 每次针对`1`中得到的`indexs`进行对比



后又经过调整，不用先遍历，在遍历中得到index，随即与`needle`进行对比即可:

```javascript
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    
    let result = -1;
    for(let i=0; i<haystack.length; i++) { 
        if(haystack.length - i + 1 >= needle.length && haystack[i] === needle[0]) {
             // str.substring(indexStart[, indexEnd])
             if(haystack.substring(i, i + needle.length) === needle) {
                 result = i;
                 break;
             }
            
        }
    }
    return result;
};
```

> 写上面代码的时候犯了一个错误，即上面注释处，JavaScript的substring方法的第二个参数是`indeEnd` 而不是其他语言API中的`count`.

- 时间复杂度: O(n), 需要遍历一遍`haystack`
- 空间复杂度: O(1)



### 反思

1. 场景要想全：梳理思路时，可从复杂例子入手，反推场景去验证自己的逻辑；
2. 用便利的操作，如`substring`取代逐个`char`的对比；



