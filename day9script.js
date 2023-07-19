function zeroesToEnd(arr) {
    let zeroPos = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        if (i !== zeroPos) {
          
          const temp = arr[i];
          arr[i] = arr[zeroPos];
          arr[zeroPos] = temp;
        }
        zeroPos++;
      }
    }
  
    return arr;
  }
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); 
console.log(zeroesToEnd([0, 0, 2, 0, 5])); 
console.log(zeroesToEnd([4, 4, 5])); 
console.log(zeroesToEnd([0, 0])); 
