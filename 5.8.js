function findLongestWord(str) {
    var words = str.split(' ');
    var longest = words.reduce((longestWord, currentWord) => {                     
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, words[0]);
    return longest.length;
   
  }
  console.log(findLongestWord("My favarit color is blue"));
