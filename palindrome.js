
function palindrome (kata) {
    var reverseWord='';
    for (let x=kata.length-1; x>=0; x--) {
        reverseWord+=kata[x];
    }
    if (kata===reverseWord) {
        return true;
    }
    else {
        return false;
    }

}
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false   