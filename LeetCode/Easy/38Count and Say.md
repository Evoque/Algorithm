## 38. Count and Say



这道题目在理解的时候出现了问题，读了很多遍不明白要求是什么，输出是什么；下面先看题目要求：

The count-and-say sequence is the sequence of integers with the first five terms as following:

```markdown
1.    1
2.    11
3.    21
4.    1211
5.    111221
```

`1` is read off as `'one 1'` or `11`.

`11` is read off as `'two 1s'` or `21`.

`21` is read off as `'one 2'`, ~~then~~ `'one 1'` or `1211`.



即后面的数的结果为，按照读的形式读上一个数， 如:

- `2`时，`1`对应结果为`'1'`, `2`的结果为`一个1` 也就是`11`
- `5`时，`4`对应结果为`'1211'`, `5`的读法为`一个1一个2两个1`，即：`111221`

两点：

1. 对前一个数的读数结果进行逐个遍历，记录当前`char`以及与当前`char`相邻且相等的个数`counter`；
2. 拼接`counter` 和 `char` 得到单个`char`或者多个相同的`char`对应的读数字符串



所以有下面代码:

```javascript
var countAndSay = function(n) { 
    let result = '1', counter = 1; 
    
    /* 因初始化时result为'1', 所以第一次读是从1开始读， 也就是获得的是2的读数，n-1才是执行的结果，因此不需要等号 */
    while(counter < n) {
        
        /*
        *    初始化的`subCounter`和下面①中重置的`subCounter`值不同，
        *  因为初始化时还为与`result`中的char进行比对；
        *  而重置时则是已经进行比对的结果，即重置其实是个复合操作: `subCounter=0; subCounter++;` => `subCounter=1;`
        */
        let subCounter=0; 
        let sub = result[0];
        let curResult = '';
        for(let i=0; i<result.length; i++){
 
            if(result[i] === sub) subCounter++;
            else {
                curResult += subCounter + sub;
                /* ① */
                subCounter=1;
                sub=result[i];
            }

            /* 
            * 上面的判断逻辑是`知道下一个char`的结果再判断后续操作(判断是否还有重复项)， 
            * 所以当i为最后一个元素的边界条件要分类讨论 
            */
            if(i === result.length-1) curResult += subCounter + sub; 
        }
        result = curResult;
        counter++;
    }
    
    
    return result;
};
```


OK, 下面反思一下遇到的问题和收获：
### 总结：
1. 题目的理解能力 其实好好理解说明信息中的第三条,
   ` `21` is read off as `'one 2'`, then `'one 1'` or `1211`. ` 就能明白题目的含义，主要还是英文的阅读能力， `'one 2'` 和 `'one 1'`之间多了一个then，原本连贯的意思`'one 2 one 1'`却被自己给分开解读了。
2. 算法细节上的思考：已在算法备注中说明

> 算法虽然简单，但在迅速的`理解题意`及`边界条件的考虑`上仍发现了自己的不足， 算是微小的进步吧。 挺好。




















