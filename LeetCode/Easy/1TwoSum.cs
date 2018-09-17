/** 
 *  `TwoSum`的终极版本 One-Pass
 *   Time Complexity: O(n)
 *   Space Complexity: O(n)
 */
public int[] TwoSum(int[] nums, int target) {  
        
    var dics = new Dictionary<int, int>();
    for (var i = 0; i < nums.Length; i++)
    {
        var num = nums[i];
        if (dics.ContainsKey(target - num))
        {
            var lookupIndex = dics[target - num];
            var smallerIndex = i < lookupIndex ? i : lookupIndex;
            var largerIndex = i > lookupIndex ? i : lookupIndex;
            return new int[] { smallerIndex, largerIndex };
        }
        else
        {
            dics[num] = i;
        }
    }
    
    throw new Exception("not find.");
}