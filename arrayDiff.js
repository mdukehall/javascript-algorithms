/*jshint esversion: 6 */

/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
array_diff([1,2],[1]) == [2]
array_diff([1,2,2,2,3],[2]) == [1,3]
*/
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

function array_diff(a, b) {
    let merged = mergeSort(a,b);
    
    for (var i = 0; i < merged.length ; i++) {
        if (merged[i] === merged[i+1]) {
            merged.splice(i,2);
        }
    }
    return merged;
}

print(array_diff([1,2],[1]));
print(array_diff([1,2,2,2,3],[2]));