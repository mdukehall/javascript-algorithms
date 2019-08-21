function mergeSort(array) {
    //take in a single, unsorted array as a paramter
    //split the array into two halves
    if (array.length < 2) return array;
    var middleIndex = Math.floor(array.length /2);
    var firsthalf = array.slice(0,middleIndex);
    var secondhalf = array.slice(middleIndex);
    return merge(mergeSort(firsthalf), mergeSort(secondhalf));
}

function merge(array1, array2) {
    //takes in two sorted arrays as parameters
    //merges those sorted arrays into one sorted array
    //returns one sorted array
    var result = [];
    while (array1.length && array2.length) {
        var minElement;
        if (array1[0] < array2[0]) minElement = array1.shift();
        else minElement = array2.shift();
        result.push(minElement);
    }
    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);

    return result;
}


print(mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1,-98,-23,54,2345]));