function bandNamesSort(bandNames) {
    
    const customSort = (a, b) => {
      const articleRegex = /^(The|A|An)\s/i; 
  
      const nameA = a.replace(articleRegex, ""); 
      const nameB = b.replace(articleRegex, ""); 
  
      return nameA.localeCompare(nameB); 
    };
  
    
    bandNames.sort(customSort);
  
    return bandNames;
  }
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  
  