class Solution {
  List<int> twoSum(List<int> nums, int target) {
    List<int> res = [];
    for (int j = 0; j < nums.length; j++) {
      for (int i = j + 1; i < nums.length; i++) {
        if (nums[j] + nums[i] == target) {
          res.add(j);
          res.add(i);
          return res;
        }
      }
    }
    return res;
  }
}
