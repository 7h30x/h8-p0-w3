
function groupAnimals(animals) {

    results=[[animals[0]]];

    for (i=1;i<animals.length; i++) {
        let isLetter=true;
        
        for (j=0; j<results.length; j++) {
            var inner=results[j];
           
         
            if (animals[i].charAt(0) === inner[0].charAt(0)){
                isLetter=true;
                break;

            } 
            else{
              isLetter=false;
            }       
        }
    
        if (isLetter===true) {
          inner.push(animals[i]);
        }
        else {
          results.push([animals[i]]);
        }
    }
    return results;
  }

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]