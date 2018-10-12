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

`21` is read off as `'one 2'`, then `'one 1'` or `1211`.



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

    while(counter < n) {
        
        let subCounter=0; 
        let sub = result[0];
        let curResult = '';
        for(let i=0; i<result.length; i++){
 
            if(result[i] === sub) subCounter++;
            else {
                curResult += subCounter + sub;
                subCounter=1;
                sub=result[i];
            }

            if(i === result.length-1) curResult += subCounter + sub;
            
        }
        result = curResult;
        counter++;
    }
    
    
    return result;
};
```





















