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









