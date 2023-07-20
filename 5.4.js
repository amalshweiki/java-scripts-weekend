/*function toWeirdCase(string){
let stringword=string.split(' ')
for (let i = 0; i < stringword.length; i++) {
let stringletter=stringword
   for (let x= 0; x < stringletter.length; x++) {
    return x % 2 == 0 ? stringletter.toUpperCase() : stringletter.toLowerCase()
   }
   return stringletter.join('') 
}
   return stringword.join(' ') 
}
console.log(toWeirdCase("amal nabeel shweiki"));*/
function toWeirdCase(string){
      return string.split(' ').map( 
        function(word)
      {
        return word.split('').map(
            function(letter, index)
        {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
     
        }).join('');
      }).join(' ');
    }
   console.log(toWeirdCase("amal nabeel shweiki"));