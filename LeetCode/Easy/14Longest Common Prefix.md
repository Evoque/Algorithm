## 最长共同前缀

给定一个字符串数组， 找出数组中所有元素最长的公共前缀，如
`['flower', 'flow', 'flight']` => `'fl'`

思考了一下，没有感觉特别通透的解决方案，简单思路如下：

1. 公共前缀最长为数组中长度最短的项，但是找出此项需要进行一遍遍历，此遍历可以在内部遍历时辅助完成；
2. 对每个字符进行遍历对比，发现不相等即返回最终结果。

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

















