function comparator(operatorString, value1, value2){
    return eval(value1 + operatorString + value2)
   }
   console.log(comparator('+',2,3))
   console.log(comparator('-',2,3))
   console.log(comparator('*',2,3))

