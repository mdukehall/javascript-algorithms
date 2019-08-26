/*jshint esversion: 6 */
/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
let right = [];
let left = [];
let bal = 0;

function lparen(str) {
    left.push(str);
    bal++;
}
function rparen(str) {
    right.push(str);
    bal--;
}
function validParentheses(parens){
    const par = parens.split('');
    par.forEach(element => {
        if (element == '(') lparen(element);
        if (element == ')') rparen(element);
    });
    print(left);
    if (bal === 0) return true;
    if (lparen.length === rparen.length) return true;
    return false;
  }

print(validParentheses('()')); //true
print(validParentheses(')(()))')); //false
print(validParentheses('(')); //false
print(validParentheses('())')); //false
print(validParentheses('(())((()())())')); //true
print(validParentheses('(())(((())())())')); //false