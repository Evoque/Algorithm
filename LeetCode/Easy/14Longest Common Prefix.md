## 最长共同前缀

给定一个字符串数组， 找出数组中所有元素最长的公共前缀，如
`['flower', 'flow', 'flight']` => `'fl'`

思考了一下，没有感觉特别通透的解决方案，简单思路如下：

1. 公共前缀最长为数组中长度最短的项，但是找出此项需要进行一遍遍历，此遍历可以在内部遍历时辅助完成；
2. 对每个字符进行遍历对比，发现不相等即返回最终结果。





###  Version One

代码如下:

```javascript
function longestCommonPrefix(strs){
    if(!strs || strs.length < 1) return '';
    
    var result = '',
        finish = false, // 用于结束外层循环
        outerLen = strs[0].length;
    
    for(let i=0; i<outerLen; i++){
        if(finish) break;
        
        for(let j=0; j<strs.length; j++){
            var item = strs[j];
            // 获取最短长度元素
            if(i===0){
                if(item.trim() === '') {
                    result = '';
                    finish = true;
                    break;
                }
                if(item.length < outerLen) outerLen = item.length;
            }
            
            // 仅拼接第一个元素的字符
            if(j === 0) result += strs[0][i];
            else if(result[i] !== item[i]) {
                result = result.substring(0, i);
                finish = true;
                break;
            }
        }
    }
    return result;
}
```



>  看了官方给出的Solution, 感觉自己的解决方案简直low的飞起。 两层循环完全没有必要；仅仅对数组进行遍历，然后前两个找出共同元素，在于随后的比较即可，见`Version Two`



### Version Two: Horizontal scanning

有一组字符，记作:`LCP(S1, ...., Sn)`, 遍历方式为: `LCP(LCP(LCP(S1, S2), S3),....., Sn)`

给出代码:

```javascript
function longestCommonPrefix(strs){
    if(!strs) return '';
    var len = strs.length;
    
    if(len === 0) return '';
    var result = strs[0].trim();
    if(len === 1) return result;
    
    for(let i=1; i<len; i++){
        // 1⃣️ 对比得到共同元素
        while(strs[i].indexOf(result) !== 0){
            result = result.substring(0, result.length - 1);
            if(result === '') return '';
        }
    }
    return result;
}
```

除了两两对比的方法，上面代码的精妙部分在1⃣️中， 对比两个字符串，得到相同的开头部分；我的第一反应仍然是`从左到右`逐字符的进行对比，这是最易理解但也是比较麻烦的方法。 而1⃣️中的思想是反其道而行之，没从用`rightStr.indexOf(leftStr)`，不匹配则对`leftStr`进行减一，直到找到最大的公共字符串或`leftStr`缩减至零。

精妙精妙， 看来有些时候，与直觉完全相反的解法可能才是最精简，效率最高的解法。

**效率分析：**

- 时间复杂度：O(n*m), n 为数组的个数，m为字符串的长度。
- 空间复杂度：O(1), only used constant extra space.



> 上面 v2有个知名缺陷， 极端情况：当前`n-1`个字符串都相等， 但最后一项只有一个字符时，前面所有的比较都是无用的，所以为了解决这种情况采用单字符逐个比较，也就回到了刚开始想的第一种解法， 有人或许会问，逐字符的对比与`indexOf`对比性能差异如何， 个人认为`indexOf`根本上也是住个字符进行对比的， 性能来说应该是一样。 所以有了下面的版本三。



### Version Three: Vertical scanning.

```javascript
function longestCommonPrefix(strs){
    if(!strs || strs.length === 0) return '';
    var result = '', finish = false;
    for(let i=0; i<strs[0].length; i++){
        if(finish) break;
        var c = strs[0][i];
        for(let j=1; j<strs.length; j++){
            if(i === strs[j].length || strs[j][i] !== c){
                result = strs[0].substring(0, i);
                finish = true;
                break;
            }
        }
    }
    
    return result;
}
```













