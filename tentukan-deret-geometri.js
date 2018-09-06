function tentukanDeretGeometri(arr) {
    var factorHolder="";
    for (index=0;index<arr.length-1;index++) {
        var angkaPertama=arr[index];
        var angkaKedua=arr[index+1];
        var factor=angkaKedua/angkaPertama;
        if (factorHolder==="")  {
            factorHolder=factor;
        }
        else if (factor===factorHolder) {
            
        }
        else {
            
 
            return false;
        }
    }
    return true;

}
console.log(tentukanDeretGeometri([1, 3, 9, 27])); // false