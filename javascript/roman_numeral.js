function romanNumeral(string) {
  // type your code here
  let subtotal = 0
  let total = 0
  const source = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  }
  for(let i=0; i<string.length; i++){
    if(source[string[i]]<source[string[i+1]]){
      subtotal = source[string[i+1]] - source[string[i]]
      total += subtotal
    }else if(source[string[i-1]]<source[string[i]]){
      total += 0
    }else{
      total += source[string[i]]
    }
  }
  return total
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
