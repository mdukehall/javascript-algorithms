/*jshint esversion: 6 */
function oddOrEven(array) {
   //enter code here
   const arrSum = array => array.reduce((a,b) => a + b, 0);
   console.log(arrSum);
   if (arrSum % 2 === 0) {return 'even';}
   return 'odd';
}

console.log(oddOrEven([0]));
console.log(oddOrEven([2, 5, 34, 6]));
console.log(oddOrEven([0, -1, -5]));