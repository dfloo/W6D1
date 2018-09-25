function curriedSum(n) {
  let nums = [];
  return function _curriedSum(num) {
    nums.push(num);
    if (nums.length === n) {
      let sum = 0; 
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      return sum;
    }
    else {
      return _curriedSum;
    }
  };
}
