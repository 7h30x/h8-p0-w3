function hitungJumlahKata(kalimat) {
    kalimat=String(kalimat).split('');
    var spaces=0;
    console.log(kalimat)

    for (char=0; char<kalimat.length; char++) {
        if (kalimat[char]==' ') {
            spaces+=1;
            
            }
        else {}    
       
    }
    
    var jumblahKata=kalimat.length-spaces;
    
    return(jumblahKata)
    }

hitungJumlahKata('I am    legend')