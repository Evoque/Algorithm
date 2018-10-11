Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.



Too Easy To Say.

Code: 

```javascript
var searchInsert = function(nums, target) {
    if(nums[nums.length -1 ] < target) return nums.length;
    let result = -1;
    for(let i=0; i<nums.length; i++){ 
        if(nums[i] >= target) {
            result = i;
            break;
        }
    }
    return result;
};
```



反思:

1. 场景未想全：`target`大于`nums`中最大的值
