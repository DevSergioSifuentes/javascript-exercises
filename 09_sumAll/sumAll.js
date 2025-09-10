const sumAll = function(num1, num2) {
    let totalSum = 0;
    if(num1 < 0 || num2 < 0 || Number.isInteger(num1) !== true || 
    Number.isInteger(num2) !== true || Number.isNaN(num1) || 
    Number.isNaN(num2)){
        return "ERROR"
    }else{
        if(num2 < num1){
            for(i = num2; i <= num1; i++){
                totalSum += i;
            }
        }
        else{
             for(i = num1; i <= num2; i++){
                totalSum += i;
            }
        }
        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
