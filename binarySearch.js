function binarySearch(numArray, key) {
    var middleIndex = Math.floor(numArray.length/2);
    var middleElement = numArray[middleIndex];
    print("middleIndex: " + middleIndex + " middleElement: " + middleElement + " Length: " + numArray.length);

    if (middleElement === key) return true;
    else if (middleElement < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    }
    else if (middleElement > key && numArray.length > 1) {
        return binarySearch(0, numArray.splice(0,middleIndex), key);
    }
    else return false;
}

//print(binarySearch([1,2,3,4,5,6],4));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],2));
