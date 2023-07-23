//Years and Centuries
//each century=100 year to calculate number of century divid by 100 the use Math.ceil to round 
const centuryFromYear = year => Math.ceil(year / 100)

/*function centuryFromYear(year) {
    return Math.ceil(year / 100)
   }*/
   console.log(centuryFromYear(1980));
   console.log(centuryFromYear(1705));
   console.log(centuryFromYear(1601));
   console.log(centuryFromYear(2000));