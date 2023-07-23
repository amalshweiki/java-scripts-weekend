//organize strings
const organizeStrings = (string1,string2) => {

    string1=string1.toLowerCase();
    string2=string2.toLowerCase();
    let arrayOfString1=string1.split('')
    let arrayOfString2=string2.split('')
    

    arrayOfString1= arrayOfString1.filter((item,index) => arrayOfString1.indexOf(item) === index);
    arrayOfString2= arrayOfString2.filter((item,index) => arrayOfString2.indexOf(item) === index);   
    let finalArray = arrayOfString1.concat(arrayOfString2).join('');
    return finalArray;
}
console.log(organizeStrings('xyaabbbccccdefww','xxxxyyyyabklmopq')) 
