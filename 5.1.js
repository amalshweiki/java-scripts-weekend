//trimming string


/*let originalstring='amal shweiki';
function trimString(string1){
   return originalstring.substring(1, originalstring.length-1);
} 
console.log(trimString(originalstring));*/

//using arrow function
let originalstring='amal shweiki'
trimString = originalstring => originalstring.substring(1, originalstring.length-1);
console.log(trimString(originalstring));