/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
function validParentheses(parens){
    var left =  parens.split('').filter(function(leftp) {
        return leftp == '(';
    });
    var right =  parens.split('').filter(function(rightp) {
        return rightp == ')';
    });
    if (left.length === right.length) return true;
    else return false;
  }

print(validParentheses('()')); //true
print(validParentheses(')(()))')); //false
print(validParentheses('(')); //false
print(validParentheses('(())((()())())')); //true