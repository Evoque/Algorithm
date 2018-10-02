## 回文数

即，反转之后与原数相同。 如 `121` => `121`; `22` => `22`;

so，首先想到的是把数字转换成字符串，然后遍历对比左半部分与右半部分对应的字符是否相等；但是犯了不认真的毛病，没自信看题就开始上手写了Javascript版的:

```javascript
var isPalindrome = function(x) {
    
    if(x < 0)  return false;
    if(x < 10) return true;
    
    var str = x.toString(), len = str.length, res = true; 
    for(let i=0; i< Math.floor(len/2); i++){
        if(str[i] !== str[len-1-i]){
            res = false;
            break;
        }
    }
    return res;
};
```

运行效率还行，打败了`80%`的其他提交， 看着还行。 然后再反过头来看说明，有句：

`Coud you solve it without converting the integer to a string?`

啥意思？ 就是你别给我转成字符串求解，这谁都会，想点高端的。 

随即有了如下的`C#`解决方案:

```c#
public bool IsPalindrome(int x) {
        
        if(x < 0 ) return false;
        if(x < 10) return true;
        if(x % 10 == 0 && x != 0) return false;
        
        var revertNum = 0; 
        while(x > 0) {
            revertNum = revertNum * 10 + x % 10;
            x /= 10;
        }
        
        return x == revertNum;
}
```

这里的想法是，每次取得x的个位，然后添加到`revertNum`中，最后`revertNum`就是`x`的反转。 试了一下，由于测试条件并没有覆盖全部边界条件(反转之后数字会溢出)，结果是正确的，效率也到了`100ms`，打败了`90%+`的提交。

自以为这个解决方案已经不错，查看官方给出的解法，发现自己的思考仍然有欠缺：

1. 不用全部反转，只反转一半就能知道`x`是不是`palindrome`数字，如`11211` ,只反转`11`然后与左边的`11`对比即可；
2. 未考虑溢出的情况，即当`revertedNum>int.MAX`的情况。

所以，最终答案：

```c#
public bool IsPalindrome(int x) {        
        if(x < 0 ) return false;
        if(x < 10) return true;
        if(x % 10 == 0 && x != 0) return false;
        
        var revertNum = 0; 
        while(x > revertNum) {
            revertNum = revertNum * 10 + x % 10;
            x /= 10;
        }
        return x == revertNum || x == revertNum/10;
}
```

仅反转一般也防止了溢出的情况。 最后分析一下时间和空间复杂度：

1. 时间复杂度(Time Complexity): 因为`x`的遍历是以除以`10`为基础而不是递增遍历，所以时间复杂度为`O(log10(n))`
2. 空间复杂度(Space Complexity): 仅用到了一个局部变量`revertNum`, 所以为O(1);













