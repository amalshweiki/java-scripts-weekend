//shortest words
function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {                     
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.length;
   
  }
  console.log(findShortestWord("My favarit color is blue"));
// [0]        [1]      [2]    [3]    [4]         
// My     favarit     color   is     blue
// 1>> shortestWord=2  currentWord=words[0].length=2       2<0 false    shortestWord=2       
// 2>> shortestWord=2  currentWord=words[1].length=7       7<0 false   shortestWord=2