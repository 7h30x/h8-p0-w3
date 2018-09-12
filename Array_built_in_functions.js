

let array=["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

function dataHandling2 (array) {
    array.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
    array.splice(4,1,"Pria", "SMA International Metro");
    return array;

}
console.log(dataHandling2(array));


tanggal=array[3].split("/");

switch (tanggal[1]){
    case "05": 
            tanggal[1]="May";
            break;
}
console.log(array[4]);
tanggal.sort(sort= (a,b) => a-b).join("-");

console.log(array)


array[1]=array[1].slice(0,15);

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */