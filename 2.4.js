//find uniq number in array


const findUniq = arr => arr.filter((element,index) =>  arr.indexOf(element) === arr.lastIndexOf(element));



/*function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }*/
  console.log(findUniq([2,2,2,2,4]));   // 0 1 2 3 4   index(2)=== lastindexof(2) 0 === 3 do not stay in array....
                                        // 0 1 2 3 4   index(4)=== lastindexof(4) 4 === 4 stay in array....

  console.log(findUniq([2,3,2,2,2]));   // 0 1 2 3 4   index(2)=== lastindexof(2) 0 === 4 do not stay in array....
                                        // 0 1 2 3 4   index(3)=== lastindexof(3) 1 === 1 stay in array....
