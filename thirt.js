/*jshint esversion: 6 */
function thirtit(n) {
    let rev = n.toString().split('').reverse();
    let seq = [1, 10, 9, 12, 3, 4];
    let sum = 0;
    rev.forEach(function(element, i) {
      sum += parseInt(element)*seq[i%6];
    });
    return sum;
}

function thirt(n) {
    let oldNum = 0;
    let newNum = 0;
   

    while (n.toString().length > 1) {
        oldNum = thirtit(n);
        console.log("length: " + n.toString().length);
        console.log("oldNum: " + oldNum + " newNum: " + newNum);
        if (oldNum === newNum) {return oldNum;}
        n = oldNum;
        newNum = oldNum;
    }
    return n;

}

console.log(thirt(929657686));
console.log(thirt(936286789));

