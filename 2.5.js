const num = 4;
const summation = (num ) => {
   let res = 0;
   for(let i = 1; i <= num; i++){
      res += i;
   };
   return res;
};
console.log(summation(num));