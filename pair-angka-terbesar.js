

//Pair Terbesar 
/*
input: a number
goal: find the largest number comprised of adjacent pairs
output: the largest number 
logic:
 STORE num as TYPE string so you can iterate the digits
 STORE currentMaxPair
 For each digit pair in num 
  check if digit pair > num
  IF YES
    num=digit pair
RETURN num


*/
function pasanganTerbesar(num) {
    num=String(num);

    var currentMaxPair='';
    
    for (let i=0;i<num.length;i++ ) {
      var currentPair=Number("" + num[i]+num[i+1]);
      if (currentPair> currentMaxPair) {
              currentMaxPair=currentPair;
              
          }
      }
      console.log(currentMaxPair)
    return Number(currentMaxPair);

  }



// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
















