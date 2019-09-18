function palindrome(str) {
    //var reversed = str.split('').reverse().join('');
    //return str === reversed;
    return str.split('').every((char, i) => {
        return char === str[str.length-i-1];
    });
}

function isAnagram(test, original) {
    //First compare the 2 strings contents
    if (!Object.is(test, original)) {return false;}
  else return false;
}

console.log(isAnagram("foefet", "toffee"));