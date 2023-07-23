//Sum of lowest numbers in array

function sumOf2lowestNumber(arr){
    //sort the element of array ascending 
    res = arr.sort((a,b) => a - b);
    //sum the 2 first elements in the array
    return res[0]+res[1];
}   
console.log(sumOf2lowestNumber([5, 4, 7, 2, 10, 1]));
