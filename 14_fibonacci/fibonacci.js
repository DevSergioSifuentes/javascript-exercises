const fibonacci = function(value) {
    intValue=parseInt(value);
    if(intValue < 0){
        return "OOPS";
    }else{
        let constructor =[0,1];
        for(let i=2;i<=intValue; i++){
            constructor.push(constructor[i-2]+constructor[i-1]);

        }
    
        return constructor[intValue];
    }
};


// Do not edit below this line
module.exports = fibonacci;
