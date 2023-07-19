function join(words) {
    let result = words[0];
    let minOverlap = 0; 
  
    for (let i = 1; i < words.length; i++) {
      const precedingWord = words[i - 1];
      const subsequentWord = words[i];
      let overlap = 0;
  
      
      for (let j = 0; j < precedingWord.length; j++) {
        const lastLetters = precedingWord.slice(j);
        const firstLetters = subsequentWord.slice(0, lastLetters.length);
  
        if (lastLetters === firstLetters) {
          overlap = lastLetters.length;
          break;
        }
      }
  
      
      result += subsequentWord.slice(overlap);
  
      
      if (i === 1) {
        minOverlap = overlap;
      } else {
        minOverlap = Math.min(minOverlap, overlap);
      }
    }
  
    return [result, minOverlap];
  }
  console.log(join(["oven", "envier", "erase", "serious"]));
console.log(join(["move", "over", "very"])); 
console.log(join(["to", "ops", "psy", "syllable"])); 
console.log(join(["aaa", "bbb", "ccc", "ddd"])); 

  