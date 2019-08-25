/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
function validParentheses(parens){
    var balance = 0;
    //base case 1: array length must be greater than > 2 (otherwise you only have 1 paren)
    if (parens.length <= 1) return 'balance: ' + balance + ' result: ' + false + ' failed base case 1';
    //base case 2: must start with a left paren
    if (parens[0] == ')') return 'balance: ' + balance + ' result: ' + false + ' failed base case 2';
    //Ok, the string is ready to iterate
    parens.split('').forEach(element => {
        if (element == '(') balance++;
        if (element == ')') balance--;
        if (balance < 0) return 'balance: ' + balance + ' result: ' + false + ' too many right parens';
      });
      if (balance < 0 || balance > 0) return 'balance: ' + balance + ' result: ' + false + ' balance is off';
      return 'balance: ' + balance + ' result: ' + true;
    
  }

print(validParentheses('()')); //true
print(validParentheses(')(()))')); //false
print(validParentheses('(')); //false
print(validParentheses('())')); //false
print(validParentheses('(())((()())())')); //true