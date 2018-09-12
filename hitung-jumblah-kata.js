function hitungJumlahKata(kalimat) {
    kalimat=kalimat.split('');
    var spaces=0;

    for (let char=0; char<kalimat.length; char++) {
        if (kalimat[char]==' ') {
            spaces+=1;
            
            }
      
       
    }
    
    var jumblahKata=spaces+1;
    
    return(jumblahKata)
    }


  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5