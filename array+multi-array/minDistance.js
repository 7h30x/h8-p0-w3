

function minDistance (array) {
    var index=0
    var currentVar="";
    var searchVar;
    var startIndex;
    var foundIndex;
    var jarak=foundIndex-startIndex;
    var terdekat="";
    function ifXO (char) {
        if (char=='o') {
            return 'x';
        }
        else {
            return'o';
        }
    } 

    //iterate from array index 0
    while (index <array.length-1) {
        //find 1st occurence of x or o and set search variable
        if (currentVar=="" && array[index]=='x' || currentVar="" && array[index]=='o') {
            currentVar= array[index]; //set the current variable with first x/o found
            searchVar= ifXO(currentVar); //set search variable
            searchindex=index;
            
        }
        //if search variable is found
        else if (array[index]===nextVar) {
            startIndex=index-foundIndex; //update search from 
            foundIndex=index; //set foundIndex as current index
            currentVar=array[index]; //update current var 
            searchVar=ifXO(currentVar); //update search var
             //update start index to current index
            if (terdekat="" || Number(terdekat) > jarak) {
                terdekat=jarak;
            }
            
        }
        else {
            //if no relevant variable is found then do nothing but iterate up
        }

        index++
        
    }
}





minDistance(['x',,,'o','x',,])