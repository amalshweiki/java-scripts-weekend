
//To Camel Case
function camelCase(stringWithDashOrUnderscore) {
    let splitStr =[];
    if (stringWithDashOrUnderscore.includes('-')) {
        splitStr = stringWithDashOrUnderscore.toLowerCase().split('-');
    } else {
        splitStr = stringWithDashOrUnderscore.toLowerCase().split('_');
    }

    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(''); 
 }
 console.log(camelCase('amal-shweiki'));
 console.log(camelCase('amal_shweiki'));