// Convert number to roman numerals

//Create object mapping relevant numbers to roman symbol equivalent
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
  
  let temp = num; //temp variable to be modified to prevent mutation of num argument
  let romanNum = []; //Array to hold each converted roman numeral
  
  //A function to break down temp into thousand, hundreds, tens 
  function breakNum(value) {
    temp -= Math.floor(temp/value) * value;
    return temp;
  }
  
  //function to match each number to roman symbol and push to romanNum array
  function addRomanNum(value) {
      romanNum.push(romanSymbols[value].repeat((temp/value) * 1)); //repeat used to indicate number of consecutive symbols (from 1-3)
  }
 
 //roman numeral conversion function
  function romanNumerals(value) {
    let flag; //variable to hold appropriate 10/100/1000 (or other relevant) position.
    
    //conditional statement to determine flag position
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

    addRomanNum(flag); //convert number to roman equivalent using flag
    temp = breakNum(flag); //modify temp to 'move' to next position (eg from thousandth to hundredth)
    if (temp >= 1) { //recursive call until temp has been reduced to one i.e no more breakdowns needed
       romanNumerals(temp);
    }
  }
  
  romanNumerals(num); //call function on passed num arg. 
  return romanNum.join("") //after recursive calls breaks when temp is < 1, join elements in romanNum array to get full roman numeral

 }
 
convertToRoman(36); //returns XXXVI
