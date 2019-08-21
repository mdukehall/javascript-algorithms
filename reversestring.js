function reverse1(str) {
    //const arr = str.split('');
    //arr.reverse();
    //return arr.join(''); 
    
    return str.split('').reverse().join('');
}

function reverse2(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

print(reverse1('summer time blues'));
print(reverse2('will wash away'));