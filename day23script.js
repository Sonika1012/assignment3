function textJustification(words, maxWidth) {
    const result = [];
    let currLine = [];
    let currWidth = 0;
  
    function distributeSpaces(currLine, currWidth, maxWidth, isLastLine) {
      const numWords = currLine.length;
      const totalSpaces = maxWidth - currWidth;
      const avgSpaces = isLastLine ? 1 : Math.floor(totalSpaces / (numWords - 1));
      const extraSpaces = isLastLine ? 0 : totalSpaces % (numWords - 1);
  
      let line = currLine[0];
      for (let i = 1; i < numWords; i++) {
        const spaces = avgSpaces + (i <= extraSpaces ? 1 : 0);
        line += ' '.repeat(spaces) + currLine[i];
      }
  
      
      if (isLastLine) {
        line += ' '.repeat(maxWidth - line.length);
      }
  
      result.push(line);
    }
  
    for (const word of words) {
      if (currWidth + currLine.length + word.length <= maxWidth) {
        currLine.push(word);
        currWidth += word.length;
      } else {
        distributeSpaces(currLine, currWidth, maxWidth, false);
        currLine = [word];
        currWidth = word.length;
      }
    }
  
    distributeSpaces(currLine, currWidth, maxWidth, true);
  
    return result;
  }
  
  
  const words = ["This", "is", "an", "example", "of", "text", "justification."];
  const maxWidth = 16;
  console.log(textJustification(words, maxWidth));
  
  