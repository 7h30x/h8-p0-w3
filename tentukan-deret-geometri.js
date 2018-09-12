/*
input: array containing series of integers
goal: decide if the icnremental ratio of adjacent numbers is constant
output: BOOL true or false
logic structure:
    STORE ratio 
    ITERATE over the input ARRAY length 
        STORE currentratio as the number @ current index and index+1
        IF currentratio is the same as ratio 
            continue
        ELSE IF ratio is ""
            ratio=currentratio
        ELSE
            return false

*/



function tentukanDeretGeometri(arr) {
    var factorHolder="";
    for (let index=0;index<arr.length-1;index++) {
        var angkaPertama=arr[index];
        var angkaKedua=arr[index+1];
        var currentFactor=angkaKedua/angkaPertama;
        if (factorHolder==="")  {
            factorHolder=currentFactor;
        }
        else if (factorHolder!==currentFactor) {
            
 
            return false;
        }
    }
    return true;

}
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false