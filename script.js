function threeSum(arr, target) {
// write your code here
	 let closestSum = Infinity;
  let diff = Infinity;
  
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let currDiff = Math.abs(target - sum);
      
      if (currDiff < diff) {
        diff = currDiff;
        closestSum = sum;
      }
      
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return closestSum;
}
  
}

module.exports = threeSum;
