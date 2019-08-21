/*jshint esversion: 6 */
 function nth(arr, pos) {
     /*
    Problem: Given an array/list [] of integers , Find the Nth smallest element in this array of integers
    */
    let sorted = arr.sort((a,b) => a-b);
    return sorted[pos-1];
 }

 print(nth([3,1,2] ,2));
 print(nth([15,20,7,10,4,3] ,3));