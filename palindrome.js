function palindrome(str) {
    //var reversed = str.split('').reverse().join('');
    //return str === reversed;
    return str.split('').every((char, i) => {
        return char === str[str.length-i-1];
    });
}

print(palindrome('iamai'));
print(palindrome('iamnotapalindrome'));
print(palindrome('1001001'));