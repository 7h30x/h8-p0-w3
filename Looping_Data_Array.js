 /*Make a function with a name dataHandlingwith a parameter to accept the argument. 
 //The argument to be received is an array containing several arrays of n . Input examples can be seen below:

// example input 
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
 Your task is to implement the function dataHandlingso that it can display data from the arguments as below:

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca
*/
var bioData = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (input) {
    var container='';
    
    for (x=0; x<input.length-1; x++) {
        y=0;
      var template= 'Nomor ID:  ' + input[x][y] + '\nNama lengkap:  ' + input[x][y+1] + '\nTTL: ' + input[x][y+2] + '\nHobi:  ' + input[x][y+3] +'\n\n';
      
        container+= template;
    }
    return container;
}
dataHandling (bioData);
