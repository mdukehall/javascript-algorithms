/*jshint esversion: 6 */
/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
class Tree {
    constructor(tree, depth) {
        //this will be a 2-dim array where the index is treated as the depth
        this._tree=[];
        this._depth=0;
      }
    
    getDepth() {
          return 
      }
    
      addLeft(str) {
        //evaluate the level and add the left paren to the tree
        this._tree[];
    }

    addRight(str) {
        //evaluate the level and add the right paren to the tree
        this._tree.push(str);
    }
    
  }
  
const tree = new Tree();



function validParentheses(parens){
    const par = parens.split('');
    par.forEach(element => {
        if (element == '(') lparen(element);
        if (element == ')') {
            if (left.length == right.length) return false; // no parent lparen
            rparen(element);
        }
    });

    //Evaluate:
    print('left:'+left+' right:'+right+' bal:'+bal);

    if (bal != 0) return false;
    if (lparen.length != rparen.length) return false;
    return true;
  }

//print(validParentheses('()')); //true
//print(validParentheses(')(()))')); //false
//print(validParentheses(')(')); //false
//print(validParentheses('(')); //false
print(validParentheses('())')); //false
//print(validParentheses('(())((()())())')); //true
//print(validParentheses('(())(((())())())(')); //false