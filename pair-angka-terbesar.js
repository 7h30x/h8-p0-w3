

//Pair Terbesar 
function pasanganTerbesar(num) {
    num=String(num);
    console.log(num);
    var currentMaxPair=[];
    
    for (digit=0;digit<num.length;digit++ ) {
      currentPair=Number("" + num[digit]+num[digit+1]);
      if (currentPair> currentMaxPair) {
              currentMaxPair=currentPair;
              
          }
      }
    return Number(currentMaxPair);

  }
pasanganTerbesar(1001290);  






















