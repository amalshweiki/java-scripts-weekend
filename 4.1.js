//Advanced Math.. Fibonacci
function fib(n) {

    const result = [0, 1];
    for (var i = 2; i <= n; i++) { //2                  3                       4
      const a = result[i - 1];    //a=ressult[1]=1      a=ressult[2]=1          a=ressult[3]=2
      const b = result[i - 2];    //b=ressult[0]=0      b=ressult[1]=1          b=ressult[2]=1
      result.push(a + b);         //[0 1 1]             [0 1 1 2]               [0 1 1 2 3]      
    }
    return result;
  }
  
  console.log(fib(8));
  console.log(fib(9));