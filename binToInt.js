/*jshint esversion: 6 */
/*
Algorithm: Convert a binary string into a base ten integer
Method: Apply Regular Expression: /[^01]/gi
    [^01]: find numbers that are 0 and 1
    g modifier: global. All matches (don't return on first match)
    i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
*/
function binaryToInteger(arr) {

    result = 0;
    result = parseInt((arr + '').replace(/[^01]/gi, ''), 2);
    return result;

}

print(binaryToInteger('1001001'));
print(binaryToInteger('00001'));
print(binaryToInteger('0010'));
