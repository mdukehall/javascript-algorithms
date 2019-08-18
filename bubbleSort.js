function bubbleSort(array) {
    /*
        Algorithm: Bubble Sort
        Loop through the input array backwards (because with each pass you've pushed the highest value to the last remaining spot)
            Loop through the remaining array and compare the index to the next index to the right, if it is bigger, swap them.
        Return the array
        This algorithm always runs in O(n^2) time.
    */
    for (var i = array.length; i>0; i--) {
        for (var j=0; j<i;j++) {
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
print(bubbleSort([5,3,8,2,1,4,6,3,15,98,65,23,9,234,654,2,5]));