function isOdd(num) {
    if (num%2===0 || num%2===-0) {
        return false;
    }
    else {
        return true;
    }
}

function mengelompokkanAngka(arr) {
    resultsArray=[[],[],[]];
    for (number=0; number<arr.length; number++) {
        if (arr[number]%3===0 || arr[number]%3===-0) {
            
            resultsArray[2].push(arr[number]);
        
        }
        else {
            if (isOdd(arr[number])===false) {
            
                resultsArray[0].push(arr[number]);
            }
            if (isOdd(arr[number])===true) {
                resultsArray[1].push(arr[number]);
            }
        }



    }
    return resultsArray;
}

console.log(mengelompokkanAngka([2, -4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
