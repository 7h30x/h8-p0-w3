
//checks if integer is a palindrome


function checkPalindrome (number) {         //checks if number is a palindrome
    var digitArray=String(number).split("");

    while(digitArray.length>0) {
        if (digitArray[0] === digitArray[digitArray.length-1]) {
            digitArray.pop();
            digitArray.shift();
              }
        else {
            return false;
             }
    }
    return true
}

function findLargerPalindrome(number) {
    while (checkPalindrome(number)===false) {
    number+=1; }
    
    return number;
  }

findLargerPalindrome(12)
