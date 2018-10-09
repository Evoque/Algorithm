## Valid Parentheses



### Version 1

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



### Version 2 Stack

1. Initialize a stack S.
2. Process each bracket of the expression one at a time.
3. If we encounter an `opening bracket`, we simply push it onto the stack. This means we will process it **later**, let us simply move onto the sub-expression ahead. *opening bracket must be the suspend bracket, e.g. all elements in the stack must be opening bracket*.
4. If we encounter a `closing bracket`, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket `of the same type`, then we pop it off the stack and continue. Else, this implies an invalid expression.
5. In the end, if we left with a stack still having elements, then this implies an invalid expression.

Bellow is the source code written in `C#`

```c#
public class Solution {
    
    private Dictionary<char, char> mappings;
    
    public Solution(){
        mappings = new Dictionary<char, char>();
        mappings.Add(')', '(');
        mappings.Add(']', '[');
        mappings.Add('}', '{');
    }
    
    public bool IsValid(string s) { 
        var stack = new Stack();
        for(int i=0; i<s.Length; i++){
            var item = s[i]; 
            if(this.mappings.ContainsKey(item)){
                if(stack.Count == 0 || mappings[item].ToString() != stack.Pop().ToString()) {
                    return false;
                }
            } else {
                stack.Push(item);
            } 
        }
        
        return stack.Count == 0;
    }
}
```



时间复杂度 & 空间复杂度都为 O(n)























