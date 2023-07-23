 //Find the Next Perfect Square
function nearest_sq(num){
    //calculates the square root of num using  Math.sqrt(num).
    //calculates the remainder, divided by 1 using the modulo operator %.
    //checks if the result equal to 0 using  ===.
    if ( Math.sqrt(num) % 1 === 0) {
        return  Math.pow(Math.sqrt(num)+1,2)
    } else {
        return -1
    }

}

console.log(nearest_sq(16));
console.log(nearest_sq(4)); 
console.log(nearest_sq(-10)); 

//simple soluation
let findNextSquare = (sq) => Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
console.log(findNextSquare(-10)); 
console.log(findNextSquare(16)); 