var arr = [5, 4, 7, 2, 10, 1];
function sumOf2lowestNumber(arr){
    res = arr.sort((a,b) => a - b).slice(0, 2);
    return res[0]+res[1];
}    
console.log(sumOf2lowestNumber(arr));
