

 /* 
    FOR index in length of arr-1
        DECLARE firstnumber AS arr[index];
        DECLARE secondnumber AS arr[index+1];
        DECLARE difference AS firstnumber - secondnumber;
        IF differenceHolder==''
            differenceHolder=difference;
        IF differenceHolder==difference 
            
        ELSE 
            return false
    ENDFOR

    return true

CALL tentukanDeretAritmatika
*/

function tentukanDeretAritmatika(arr){
    var differenceHolder="";
    for (let index=0; index<arr.length-1; index++) {
        var firstnumber = arr[index];        
        var secondnumber= arr[index+1];
        var currentDiff = firstnumber - secondnumber;
        if (differenceHolder=="") {
            differenceHolder=currentDiff;
        }
        else if (differenceHolder!==currentDiff) {
            return false;
        }

    }
    
    return true;
}


// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
