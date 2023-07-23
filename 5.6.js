//Mask
/*function maskify(secretString)
{
    return maskString='#'.repeat(secretString.length-4) + secretString.substring(secretString.length-4);
   
}*/
 
 maskify= (secretString) =>
 maskString='#'.repeat(secretString.length-4) + secretString.substring(secretString.length-4);
   
                                                            
console.log('amalpassword');
console.log(maskify('amalpassword'));