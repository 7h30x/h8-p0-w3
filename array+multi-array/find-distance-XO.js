"use strict";
/*pseudocode
input= array with x, o , 'space'
goal: find shortest distance between x and o , or o and x
output: variable of stated goal
logic structures:
    STORE current state as x 
    STORE 'starting index' as index of found x
    STORE distanceXO=''
    STORE distanceOX=''
    iterate over array length
        currentstate=x
        IF variable is o
            found index = index of o
            STORE x= CALC distance between starting index and found index 
            IF distanceXO==='' OR distanceXO>x
                STORE distanceXO=x
    end iteration
    iterate over array length
        currentstate=o
        IF variable is x
            found index = index of x
            STORE o= CALC distance between starting index and found index 
            IF distanceOX==='' OR distanceXO>o
                STORE distanceOX=o   

    end iteration
    
    return minimum of distance XO AND distanceOX

*/
function targetTerdekat (arr) {
   
    let startingIndex=arr.indexOf('x');
   
    let distanceXO=0;
    let distanceOX=0;

    for (let i=startingIndex; i<arr.length; i++) {

        if (arr[i]==='o' && startingIndex!==-1) {
         
            let foundIndex=i
            
            let localDistance=foundIndex-startingIndex;
            
            
           
            if (distanceXO===0 || distanceXO>localDistance) {
               
                distanceXO=localDistance;
            
            }
            

        }
        else if (arr[i]==='x') {
            startingIndex=i
       
        }
    }

    
    startingIndex=arr.indexOf('o');
    for (let j=startingIndex; j<arr.length; j++) {
        if (arr[j]==='x' && startingIndex!==-1) {
            let foundIndex=j
            let localDistance=foundIndex-startingIndex; 0
            
            if (distanceOX===0||distanceOX>localDistance) {
                distanceOX=localDistance;
            }
        }
        else if (arr[j]==='o') {
            startingIndex=j
        }
    }
    
if (distanceOX===0 && distanceXO==0){
    return 0
    }
else if (distanceOX===0 || distanceXO===0){
    return Math.max(distanceXO,distanceOX)
}
else {
    return Math.min(distanceXO,distanceOX)
}
}


  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2