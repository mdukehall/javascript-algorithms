/*jshint esversion: 6 */
/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
class Tree {
    constructor() {
        //this will be an array where the index is treated as the depth
        this._tree=[];
        this._depth=0;
      }
    getDepth() {
        return this._depth;
    }
    incDepth() {
        this._depth++;
    }
    decDepth() {
        if (this._depth < 0) {print('Error: Requested depth less than zero.');}
        this._depth--;
    }
    
    addLeft(str) {
        //evaluate the level and add the left paren to the tree
        let d = this._tree.getDepth();
        this._tree[d] += str;
        this._tree.incDepth();
    }

    addRight(str) {
        //evaluate the level and add the right paren to the tree
        let d = this._tree.getDepth();
        this._tree[d] += str;
        this._tree.decDepth();
    }
    
  }
  
const tree = new Tree();
function validParentheses(parens){
    const par = parens.split('');
    par.forEach(element => {
        if (element == '(') tree.addLeft(element);
        if (element == ')') tree.addRight(element);
    });

    //Print:
    tree.forEach(node => {
        console.log('Depth: ' + index + ' Value: ' + element);
    });

  }

//print(validParentheses('()')); //true
//print(validParentheses(')(()))')); //false
//print(validParentheses(')(')); //false
//print(validParentheses('(')); //false
//print(validParentheses('())')); //false
validParentheses('(())((()())())'); //true
//print(validParentheses('(())(((())())())(')); //false