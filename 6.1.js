//Mumbling
function accum(mumblingString){
    
    let mumblingString2=mumblingString.split('')

    for (let i = 0; i < mumblingString2.length; i++) {
       
        mumblingString2[i]=mumblingString2[i].charAt(0).charAt(0).toUpperCase()+mumblingString2[i].repeat(i)+ mumblingString2[i].substring(1)
 }              
return mumblingString2.join('-');
    }
console.log( accum("abcde"));