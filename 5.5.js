//Abbreviate two words

let Name="amal shweiki";
function AbbreviateTwoWords(Name){
    let NameArray = Name.split(' ');
    for (let i = 0; i < NameArray.length; i++) {
        
        NameArray[i] = NameArray[i].charAt(0).toUpperCase() ;     
    }
    return NameArray.join('.'); 
}
console.log(AbbreviateTwoWords(Name)); 

/*let Name="Amal shweiki";
function AbbreviateTwoWords(Name){ 
return Name.split(" ").map(element) => element.charAt(0).toUpperCase().join(".")
}
console.log(AbbreviateTwoWords(Name)); */