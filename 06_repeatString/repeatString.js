const repeatString = function(string, num) {
    let longString = string;
    if(num<0){
        return "ERROR"
    }else if(num===0){
        return "";
    }else{

        for(let i=0;i<num-1;i++){
            longString += string;
        }
    return longString
    }
};

// Do not edit below this line
module.exports = repeatString;
