
//checks if integer is a palindrome



function angkaPalindrome(num) {
    var state=true;
    function checker(num) {        
        var digitArray=String(num).split("");
            while (digitArray.length>0) {
            if (digitArray[0] === digitArray[digitArray.length-1]) {
                digitArray.pop();
                digitArray.shift();
                  }
            else {
                state=false; //if the digits dont match then its not a palindrom and you can stop the while loop
                return; //this ends the function (dont use break or the parent function will end too)
                 }
                
            }
            state=true;
            
        
        }
    num++;
    checker(num)
    while (state===false) {
        num++;
        checker(num);
        
        }
    return num;
    }


  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001