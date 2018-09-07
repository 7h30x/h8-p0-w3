
/*pseudocode
input= array with x, o , 'space'
goal: find shortest distance between x and o , or o and x
output: variable of stated goal
logic structures:
    STORE current state as x 
    STORE 'starting index' as index of x
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
function findXO (array) {
   
    var startingIndex=array.indexOf('x');
    var distanceXO='';
    var distanceOX='';

    for (i=startingIndex; i<array.length; i++) {

        if (array[i]==='o') {
         
            var foundIndex=i
            
            var localDistance=foundIndex-startingIndex;
            
             distanceXO=localDistance;
           
            if (distanceXO>localDistance) {
               
                console.log('distancexo' +distanceXO)
            
            }
            

        }
        else if (array[i]==='x') {
            startingIndex=i
       
        }
    }
    
    startingIndex=array.indexOf('o');
    for (j=startingIndex; j<array.length; j++) {
        if (array[j]==='x') {
            var foundIndex=j
            var localDistance=foundIndex-startingIndex;
            distanceOX=localDistance;
            if (distanceOX>localDistance) {
                distanceOX=localDistance;
            }
        }
        else if (array[j]==='o') {
            startingIndex=j
        }
    }

return `smallest distance is:  ${Math.min(distanceXO,distanceOX)}`
}


array=['o','o','o',,'x',,,,,'o','x'];
console.log(findXO(array))
        
            
   
        