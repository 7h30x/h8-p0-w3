/* 
PSEUDOCODE
input= array
goal=mean of array rounded to nearest int.
output=function returning mean of input array
logic structures: 
   STORE currentIndex=0;
   STORE sum=0
    WHILE currentIndex is less than length of input array
        sum+=array[currentIndex]
        currentIndex ++;
    END WHILE
    RETURN Math.round (sum/array.length)
*/


function cariMean(arr) {
    var currentIndex=0;
    var sum=0;
    while (currentIndex < arr.length){
        sum+=arr[currentIndex];
        currentIndex++;
    }
    return Math.round(sum/(arr.length));

}



//TEST CASES
console . log ( cariMean ([ 1 , 2 , 3 , 4 , 5 ])); // 3 
console . log ( cariMean ([ 3 , 5 , 7 , 5 , 3 ])); // 5 
console . log ( cariMean ([ 6 , 5 , 4 , 7 , 3 ])); //5 
console . log ( cariMean ([ 1 , 3 , 3 ])); // 2 
console . log ( cariMean ([ 7 , 7 , 7 , 7 , 7 ])); // 7


