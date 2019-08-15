function binarySearch(numArray, key) {
    var middleIndex = Math.floor(numArray.length/2);
    var middleElement = numArray[middleIndex];
    var arrayLength = numArray.length - 1;
    print("middleIndex: " + middleIndex + " middleElement: " + middleElement + " Length: " + arrayLength);

    if (key === middleElement) return true;
    else if (key > middleElement && arrayLength > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    }
    else if (key < middleElement && arrayLength > 1) {
        return binarySearch(numArray.splice(0,middleIndex), key);
    }
    else return false;
}

//print(binarySearch([1,2,3,4,5,6],4));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],2));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],80));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],15));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],9000));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],-7));


