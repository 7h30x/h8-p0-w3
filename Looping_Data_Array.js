 /*Make a function with a name dataHandling with a parameter to accept the argument. 
 //The argument to be received is an array containing several arrays of n . Input examples can be seen below:

// example input 
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

Output:

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

*/

var array = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (input) {
   
    for (x=0; x<input.length; x++) {
        
      console.log('Nomor ID:  ' + input[x][0] + '\nNama lengkap:  ' + input[x][1] + '\nTTL: ' + input[x][2] +" "+ input[x][3] + '\nHobi:  ' + input[x][4] +'\n\n');
      
    }
   
}
dataHandling (array);