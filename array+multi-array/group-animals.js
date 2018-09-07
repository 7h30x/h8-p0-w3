
function groupAnimals (animals) {
   
    groups=[[animals[0]]]
   
   
    for (i=1; i<animals.length; i++) {
        var isLetter=true;
       
        for (j=0; j<groups.length; j++) {
          console.log('i '+i)
            console.log('j '+j)
            console.log('groups.length ' + groups.length)
              console.log(animals[i]);
                console.log(groups[j]);
            if (animals[i].charAt(0) !== groups[j][0].charAt(0)) {
              
                isLetter=false;
                
                }
            else {
                isLetter=true;
                break;
            }
          }
        if (isLetter===false) {
            groups.push([animals[i]]);
            }
        else {
          
            groups[j].push(animals[i]);
              }
    }
    return groups;
    }

animals=["ayam", "akucing", "bebek", 'calamity',"bangau","ahol",'casanddra']
groupAnimals(animals)


//notes
//make the looping variables easy to read > they should be identifiable based on loop number rather than too descriptive
//take a break if you get stuck and move on to another problem
//break a complex problem down to individual parts that are not working
//recognize if you don't have the right approach and get input
//issues usually arise if a problem solution requires patterns you don't have in your repertoire
// 