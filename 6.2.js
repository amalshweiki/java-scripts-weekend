
 //Counting Duplicates
let stringforcheck="amalshweiki"


let findDuplicates = stringforcheck => {
    stringforcheck=stringforcheck.toLowerCase();
    let strArray=stringforcheck.split('')
    let duplicatesarray = strArray.filter((item, index) => strArray.indexOf(item) !== index)

    duplicatesarray= duplicatesarray.filter((item,index) => duplicatesarray.indexOf(item) === index);
        
    return duplicatesarray.length
}
console.log(findDuplicates(stringforcheck)) 
console.log(findDuplicates('abcccc')) 
console.log(findDuplicates('aA11')) 