//Basic Math
//The function take three arguments - operation, value1(number),value2(number).
//return result of numbers after applying the operation
// eval ... function evaluates JavaScript code represented as a string and returns its completion value
const comparator = (operatorString, value1, value2) =>eval(value1 + operatorString + value2)

/*function comparator(operatorString, value1, value2){
    return eval(value1 + operatorString + value2)
   }*/
   console.log(comparator('+',2,3))
   console.log(comparator('-',2,3))
   console.log(comparator('*',2,3))

