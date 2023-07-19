let binaryArray=[0,0,0,1];
function toDecimal(binaryArray){
    let decimal = 0;
    for(let i = 0; i < binaryArray.length; i++) {
        decimal = (decimal * 2) + binaryArray[i];
    }
    return decimal;  
} 
 console.log(toDecimal([0,0,1,0,1])) ;