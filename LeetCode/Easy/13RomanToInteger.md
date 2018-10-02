## 罗马数字转整数

```json
Symbol     Value
 I			1
 V			5
 X			10
 L			50
 C			100
 D			500
 M			1000
```

需注意一点：

- 4并不是用`IIII`表示，而是用`IV`表示；同理如9、40、90、400、900。 默认规则：左边的符号比右边的符号代表的数字大，如`LV`代表55， 当左边比右边小时代表右边数值减去左边，如`IV`为`5-1=4`



所以，解法思路为：每次取前两个符号，判断符号对应的大小，拼接得到的数字。 代码如下：

```javascript
var romanToInt = function(s) { 
    var romToIntObj = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    
    var result = 0, temS = s;
    while(temS.length > 1){
        var item = temS.substring(0, 2);
        var preInt = romToIntObj[item[0]], sufInt = romToIntObj[item[1]];
        if(preInt >= sufInt ) {
            temS = temS.substring(1);
            result += preInt;
        } else {
            temS = temS.substring(2);
            result += sufInt - preInt;
        }
    }
    
    if(temS) result += romToIntObj[temS];
    return result;
};
```



### 性能分析

1. 时间复杂度：单次遍历符号字符串，O(n)
2. 空间复杂度：辅助变量`temS`, 复杂度O(1)





精简一下， 取消中间变量，得到下面代码：

```javascript
var romanToInt = function(s) { 
    var romToIntObj = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    
    // 因为每次都是两个符号之间的对比，所以最后一个符号没有进行计算。
    var result = romToIntObj[s[s.length-1]];
    for(let i=0; i < s.length-1; i++){ 
        let itemVal = romToIntObj[s[i]];
        if(itemVal < romToIntObj[s[i+1]]){
            result -= itemVal;
        } else {
            result += itemVal;
        }
    }
    return result;
};
```



上面的解题思路是从左到右遍历， 也可以从右到左遍历。因为默认是左边的比右边的合要大，所以可以和每次的`result`进行比较，只要`<`就减去，`>=`就相加；是解题的另一种思路。











