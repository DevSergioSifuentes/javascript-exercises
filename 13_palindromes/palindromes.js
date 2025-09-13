const palindromes = function (entry) {
    let plainString = entry.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let reversedString ="";
    for(let i=plainString.length-1;i >= 0; i--){
        reversedString += plainString[i];
    }
    console.log(plainString);
    console.log(reversedString);

    if(plainString === reversedString){
        return true;
    }else{
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
