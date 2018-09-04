
const input=[ " 0001 " , " Roman Alamsyah " , " Bandar Lampung " , " 21/05/1989 " , " Reading " ]  


function dataHandling2 (x) {
    x.splice(1,0,'Roman Alamsyah Elsharawy');
    x.splice(2,0,'Bandar Lampung Province');
    x.splice(4,1,"Male", "International Metro High School");
    return x;
}

var date=input[3].split('/').sort(function(a,b) {return(b-a)})  //get and format date from the 'input' array

console.log('tanggal tersortir: '+ date);
date=date.join('-');
console.log('formatted tanggal: '+ date); 

month=date[2];
switch (Number(month)) {      //convert month number into month name
    case 01: month='January'
            break;
    case 02: month='February'
            break;    
    case 03: month='March'
            break;        
    case 04:month='April'
            break;
    case 05:month='May';
            break;
    case 06:month='June'
            break;
    case 07:month='July'
            break;
    case 08:month='August'
            break;
    case 09:month='September'
            break;
    case 10:month='October'
            break;
    case 11:month='November'
            break;
    case 12:month='December'
            break;        
    }
console.log('Bulan: '+ month)

const data=dataHandling2(input);  //assign dataHandling function value to variable 'data', and slice 2nd element to 15 chars.
console.log(String(data[1]).slice(0,15)); //taking index of an array will return the actual data (if type==string, then will return data with type==string)

