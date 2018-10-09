## Valid Parentheses





```javascript
function isValid(s){
     
    if(!s || !(s = s.trim())) return true;  
    // 奇数一定为false
    if(s.length % 2 !== 0) return false;
    
    const parentObj = {
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{"
    };
    
    let arr = s.split('');
    let assistArr = [];
    while(arr.length){
        const first = arr.pop(); 
        let right = arr[arr.length - 1];
        if(parentObj[first] === right){
            arr.pop();
        } 
        else {
            right = assistArr[assistArr.length - 1];
            if(parentObj[first] === right) assistArr.pop();
            else assistArr.push(first);
        }
    }
    
    return assistArr.length === 0;
    
}
```



上面是自己的第一版代码， 虽然实现了效果，但是没有全局把握的感觉， 看了官方的答案之后，发现原来还有很多种解法。 然后意识到自己解算法的方式和角度都是有问题的。 角度的话可能要慢慢培养， 方式的话最大的问题是把所有的情况在脑海里模拟，在没有完全清晰、考虑所有情况之前就下手去写代码，造成代码不严谨，自己也会有未能全局把控的感觉。 所以，以后写算法， **第一步，把思路理清，写下来， 然后注明边界条件。 如果一种思路不行，注明为什么不行，更重要的，刚开始为什么自己觉得行**！





