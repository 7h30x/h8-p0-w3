function KelasSatuDua (kelasSatu, KelasDua) {
    inputArray=kelasSatu.concat(kelasDua)
    console.log(inputArray)
    outputArray=[]

    outputArray.push(inputArray[0])
        for (i=0; i<inputArray.length; i++) {
           console.log(inputArray[i])
           
             state=true;
            for (j=0; j<outputArray.length; j++) {
                console.log(outputArray[j])
                console.log(j)
                if (inputArray[i] === outputArray[j]) {
                    state=false;
                    break;
                }
            }
            console.log('--------'+ state)
            if (state===true) {
              console.log('----------------')
                outputArray.push(inputArray[i])
            }
        
        
    }
    return outputArray;
}


kelasSatu = ['Adi', 'Budi'];
kelasDua= ['Budi','Jamila']
KelasSatuDua(kelasSatu, kelasDua)
  
input = 2 arrays
goal= reduce input arrays to single array, delete duplicate values
output=single array without duplicates

logic required= 
loop over array 1/2,  
    state=true;
        loop over output array,
     
        if value is in output array        
            then break loop (state=false)
        if value is not in output array
            keep iterating over output array until finish 
            state=true
    if state=true
        then add value to output array ()
    if state=false  
        do not add to output array


