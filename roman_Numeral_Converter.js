/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/


function convertToRoman(num) {
  const romanSymbols = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }
  
  let temp = num; 
  let romanNum = []; 
  
   
  function breakNum(value) {
    temp -= Math.floor(temp/value) * value;
    return temp;
  }
  

  function addRomanNum(value) {
      romanNum.push(romanSymbols[value].repeat((temp/value) * 1)); 
  }
 

  function romanNumerals(value) {
    let flag; 
    
    if (value >= 1000) {flag = 1000;}
    else if (value >= 100) {
      if (value >= 900) {flag = 900;}
      else if (value >= 500) {flag = 500;}
      else if (value >= 400) {flag = 400;}
      else {flag = 100;}
      }
    else if (value >= 10) {
      if (value >= 90) {flag = 90;}
      else if (value >= 50) {flag = 50;}
      else if (value >= 40) {flag = 40;}
      else {flag = 10;}
    }
    else {
      if (value >= 9) {flag = 9;}
      else if (value >= 5) {flag = 5;}
      else if (value >= 4) {flag = 4;}
      else {flag = 1;}
    }

    addRomanNum(flag); 
    temp = breakNum(flag); 
    if (temp >= 1) { 
       romanNumerals(temp);
    }
  }
  
  romanNumerals(num); 
  return romanNum.join("") 

 }
 
convertToRoman(36); //returns XXXVI
