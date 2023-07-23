//Write a program that finds the summation of every number from 1 to num

const num = 4;
const summation = (num ) => {
   let res = 0;
   for(let i = 1; i <= num; i++){
      res += i;
   };
   return res;
};
console.log(summation(num));