/*jshint esversion: 6 */
/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
class Tree {
    constructor() {
        //this will be an array where the index is treated as the depth
        this.tree=[];
        this.depth=0;
      }
    getDepth() {
        return this.depth;
    }
    incDepth() {
        this.depth++;
    }
    decDepth() {
        if (this.depth < 0) {console.log('Error: Requested depth less than zero.');}
        this.depth--;
    }
    
    addLeft(str) {
        //evaluate the level and add the left paren to the tree
        let d = this.depth;
        this.tree[d] += str;
        this.depth++;
    }

    addRight(str) {
        //evaluate the level and add the right paren to the tree
        let d = this.depth;
        this.tree[d] += str;
        this.depth--;
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
    tree.tree.forEach(node => {
        console.log('Depth: ' + index + ' Value: ' + element);
    });

  }

  //
validParentheses('(())((()())())'); //true
//print(validParentheses('()')); //true
//print(validParentheses(')(()))')); //false
//print(validParentheses(')(')); //false
//print(validParentheses('(')); //false
//print(validParentheses('())')); //false
//print(validParentheses('(())(((())())())(')); //false