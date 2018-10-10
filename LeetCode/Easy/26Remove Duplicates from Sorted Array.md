### Remove Duplicates from Sorted Array

前提条件:

1. sorted array

要求:

1. remove duplicates
2. in-place: 也就是把不重复的项移到最前方，如: [1,1,1,2,2,4,5] => [1,2,4,5,1,1,2]
3. no extra space use, e.g. space complexity is O(1)



思路:

1. 需要对数组进行遍历
2. 需要一个指针，指不重复项的最后位置
3. 需要判断新得到的元素是否为重复项，因为`nums`是sorted array, 所以只需要拿新元素与已排序数组的最后一项对比即可

so, 得到如下代码:

```javascript
var removeDuplicates = function(nums) {
    const len = nums.length;
    if(len < 2) return len;
    
    let head = 0;
    for(let i=1; i<len; i++){
        if(nums[head] !== nums[i]) {
            // 新元素与已排序末尾元素有间隔时才需移动(赋值)
            if(i-1 > head) {
                nums[head+1] = nums[i];
            }
            head++;
        }
    }
    return head+1;
}
```



- 时间复杂度：O(n)
- 空间复杂度:   O(1)

测了一下运行效率，beat 100%， 👏👏🍺

















