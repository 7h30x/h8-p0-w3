
const word="katak"

function Palindrome (word) {
    reverseWord='';
    for (x=word.length-1; x>=0; x--) {
        reverseWord+=word[x];
    }
return reverseWord; 
}
Palindrome(word);



