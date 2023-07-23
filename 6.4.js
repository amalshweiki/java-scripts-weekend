//isogram
let stringforcheck="amalshweiki"
let findDuplicates = stringforcheck => {
    stringforcheck=stringforcheck.toLowerCase();
    let strArray=stringforcheck.split('')
    let duplicatesarray = strArray.filter((item, index) => strArray.indexOf(item) !== index)

   if (duplicatesarray.length ==0 ) {
    return true;
   } else {
    return false;
   }   
}
console.log(findDuplicates(stringforcheck)) 
console.log(findDuplicates('abcccc')) 
console.log(findDuplicates('aA11')) 
console.log(findDuplicates('abcdef')) 