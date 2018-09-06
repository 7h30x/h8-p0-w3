function perkalianUnik(arr) {

    var container =[]; //empty container to hold new array
   
    for (indexArr=0; indexArr < arr.length; indexArr++ ) {
      var total=1;     //instance variable Total which holds value of multiplied numbers 
       for (iterateArr=0; iterateArr < arr.length; iterateArr++) {
           
            if (iterateArr===indexArr) {
            }  //if the iterator is at the current index position dont multiply that number to find total
            else {
            total*=Number(arr[iterateArr]); //multiply array values to find Total    
            }
       }

       container.push(total); //after finding Total move to next index position

    }
    return container;
}

perkalianUnik([7,8,9])

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]