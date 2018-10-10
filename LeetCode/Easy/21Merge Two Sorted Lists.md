## Merge Two Sorted Lists

我的解法是

- 遍历l1
- l1Item<l2Item, 添加l1Item到结果
- l1Item === l2Item, 添加两者到结果
- l1Item>l2Item, 添加l2Item到结果
- 如果期间l2已经遍历完，添加l1剩余部分到结果，结束遍历
- 完成l1遍历之后，如果l2中还有剩余，添加到结果，完成

代码如下:

```javascript
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l1.length) return l2;
    if(!l2 || !l2.length) return l1;
    
    let indexLeft = 0, lenLeft = l1.length,
        indexRight = 0, lenRight = l2.length,
        result = [];
    
    while(indexLeft<l1.length) { 
        // l2 finish, concat l1 left
        if(indexRight >= lenRight) {
            result = result.concat(l1.slice(indexLeft));
            break;
        }
        
        const l1Item = l1[indexLeft];
        const l2Item = l2[indexRight];
        
        if(l1Item < l2Item) {
            result.push(l1Item);
            indexLeft++;
        } 
        else if(l1Item === l2Item){
            result.push(l1Item, l2Item); 
            indexLeft++;
            indexRight++;
        } else if(l1Item > l2Item) {
            result.push(l2Item);
            indexRight++;
        }
        
    }
    
    // l1 finish, concat l2 left
    if(indexRight < lenRight-1) {
        result = result.concat(l2.slice(indexRight));
    }
    
    return result;
    
};
```

奇怪的是， 我在本机开发环境和`leetcode`给出的调试环境中都能得到正确的结果，但是`Run Code`和`Submit Solution`都判断我的代码执行有错， 不明白错误原因在哪里， 已提交讨论，希望有人能够解答。 

决定用`C#`重写一遍看是否会出现同样的情况。

--------

看了别人的答案，才发现自己走入了很大的误区。
先看代码区域的注释
```
/**
 *  Definition for singly-linked list.
 *  function ListNode(val){
 *      this.val = val;
 *      this.next = null;
 *  }
 */ 
```

也就是说，用JS解决此问题时，要使用这种结构，而不是通过`Array`去模拟。 所以， 上面的解决方案必然过不去Test啊，啊啊啊啊啊。  so， 有了下面的解决方案：
> 此处比较绕的地方是，要通过next去串联所有的节点，所以要有指针指向最后一个`next`
```javascript
var mergeTwoLists = function(l1, l2){
    let head = { val: -1, next:null };
    let cur = head;
    while(l1 && l2) {
        if(l1.val > l2.val){
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }   
    cur.next = l1 || l2;
    return head.next;
}
```

- 时间复杂度：需要遍历`l1`或`l2`二者长度的最小值，所以为O(n)
- 空间复杂度：仅需要当前node的指针，不需要额外的存储，为O(1)

### 注： 此算法最大的收获
1. 理解`ListNode`自定义格式
2. 转换集合思维(Array),应用`next`进行串联。
3. 代码最后的精华为 `cur.next = l1 || l2`, 理解这点就完全理解ListNode的精髓。
4. 开放自己的编程思维。













