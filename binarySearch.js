function binarySearch(numArray, key) {
    /* Recursive Solution: 
    This function recursively calls itself until either: It has identified the key (base case) or the array length is 1 (key is not present).
    Otherwise the function divides the array by half, pivoting on whether the key is less than or greater than the middle element.
    */
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

//Test Cases
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],2));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],80));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],15));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],9000));
print(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90],-7));


