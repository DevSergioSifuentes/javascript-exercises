const removeFromArray = function(originalArray, ...numValues) {
    for(let i=0;i<numValues.length; i++){
        
        for(let j=originalArray.length-1;j >= 0; j--){
            
            if(originalArray[j] === numValues[i]){
                originalArray.splice(j,1);
            }
        }
    }
    return originalArray;
};



// Do not edit below this line
module.exports = removeFromArray;
