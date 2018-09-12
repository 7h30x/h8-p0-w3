/*
input: array of numbers
goal: list all numbers which are unique from the multiplication of all possible n-1 combinations
output: array of numbers
logic: 
STORE resultsArray 
STORE currentResult =1
ITERATE over numbers in the input array using FOR loop
  STORE iterator=i
  IF iterator is not in current number's index position 
  currentResult *= number  

resultsArray.push (currentResult)
END FOR
*/
function perkalianUnik(arr) {

    var container =[]; //empty container to hold new array
      //instance variable ; holds value of multiplied numbers 
    for (let i=0; i < arr.length; i++ ) {
     
      var total=1;
      let iterateArr=0;
            while (iterateArr<arr.length) {
              if (iterateArr!==i){
                  total*=Number(arr[iterateArr]); //multiply array values to find Total    
                  }
              iterateArr++;  
            }
              
       container.push(total); //after finding Total move to next index position

            }


       
    
    return container;
    }

  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

