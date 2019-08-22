/*jshint esversion: 6 */
/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
So there's a lot of ways to do this.
Warning: Using pop/push solution will fail on an array of length 1.
*/
function highAndLow(str) {
    str = str.split(' ').sort((a, b) => a - b);
    return str[str.length-1] + ' ' + str[0];
}

print(highAndLow("1 2 3 4 5"));
print(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
print(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));