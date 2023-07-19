

function nbYear(p0,persent,comingOrLeave,population){
    let result=p0;
    let numberOfYear=0;
   
    while (result <= population){
        result =result + (result*persent/100)+ comingOrLeave;
        numberOfYear++;
    }
    
    return numberOfYear;
}
console.log(nbYear(1500,5,100,5000));