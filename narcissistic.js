function narcissistic(value) {
/*
A Narcissistic Number is a number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).
*/
let numArray = value.toString().split('');
let result = 0;
let factor = numArray.length;

for (i=0; i < numArray.length; i++) {
    result += Math.pow(parseInt(numArray[i]), factor);
}

print('Value: ' + value + ' Result: ' + result + ' Factor: ' + factor);

if (value === result) return true;
else return false;

}

print(narcissistic(153));
print(narcissistic(1634));
print(narcissistic(7));
