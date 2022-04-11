function reverseArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}


function filterRange(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minVal || arr[i] > maxVal) {
            for (var s = i+1; s < arr.length; s++) {
                arr[s-1] = arr[s];
            }
            arr.length-1; 
            i-1;
        }
    }
}

function concatAr(arr1, arr2) {
    var newArr = [];
    buildFrom(newArr,arr1);
    buildFrom(newArr,arr2);
    return newArr;
}
