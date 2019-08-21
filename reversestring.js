/*
Not much here.  Two ways to reverse a string in Javascript.
*/
function reverse1(str) {
    return str.split('').reverse().join('');
}

function reverse2(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

print('Using reverse(): ' + reverse1('summer time blues'));
print('Using reduce(): ' + reverse2('will wash away'));