const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
  if(array.length === 0){
    return 0;
  }else{
    return array.reduce((a,b) =>{
      return a+b;
    })
  };
	
};

const multiply = function(array) {
  if(array.length === 0){
    return 0;
  }else{
    return array.reduce((a,b) =>{
      return a*b;
    },1);
  };
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num1) {
	let accumulator =1;
  for(let i =1; i<=num1;i++){
    accumulator *= i;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
