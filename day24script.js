function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    const mergedArray = new Array(nums.length);
  
    function mergeSortWithCount(start, end) {
      if (start >= end) return;
  
      const mid = Math.floor((start + end) / 2);
  
      mergeSortWithCount(start, mid);
      mergeSortWithCount(mid + 1, end);
  
      let i = start;
      let j = mid + 1;
      let k = start;
      let smallerCount = 0;
  
      while (i <= mid && j <= end) {
        if (nums[i] > nums[j]) {
          smallerCount++;
          mergedArray[k++] = nums[j++];
        } else {
          counts[i] += smallerCount;
          mergedArray[k++] = nums[i++];
        }
      }
  
      while (i <= mid) {
        counts[i] += smallerCount;
        mergedArray[k++] = nums[i++];
      }
  
      while (j <= end) {
        mergedArray[k++] = nums[j++];
      }
  
      for (let m = start; m <= end; m++) {
        nums[m] = mergedArray[m];
      }
    }
  
    mergeSortWithCount(0, nums.length - 1);
    return counts;
  }
  
  
  console.log(countSmaller([5, 2, 6, 1])); 
  console.log(countSmaller([-1, -1])); 
  