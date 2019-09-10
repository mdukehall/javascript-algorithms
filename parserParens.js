/*jshint esversion: 6 */
/*
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
*/
class Tree {
    constructor() {
        //this will be an array where the index is treated as the depth
        this.tree = [];
        this.depth = 0;
        this.errors = [];
        
      }

    get getDepth() {
        return this.depth;
    }

    incDepth() {
        this.depth++;
    }

    decDepth() {
        if (this.depth < 0) {this.errors.push('A negative depth value is not possible.');}
        this.depth--;
    }

    addLeft(str) {
        //evaluate the level and add the left paren to the tree
        let d = this.depth;
        console.log('str:' + str + ' depth:' + d);
        this.tree[d] += str;
        this.depth++;
    }

    addRight(str) {
        //evaluate the level and add the right paren to the tree
        let d = this.depth;
        this.depth--;
        console.log('str:' + str + ' depth:' + d);
        this.tree[d] += str;
        if (this.depth < 0) {this.errors.push('A negative depth value is not possible.');}
    }

    fillTree(str) {
        const par = str.split('');
        par.forEach(element => {
            if (element == '(') this.addLeft(element);
            if (element == ')') this.addRight(element);
        });
    }
    
    
    
    validateTree() {
        //function runs validation rules against tree.
        this.tree.forEach(element => {
            console.log(element);

        });
    }
  }
  
const mytree = new Tree();
mytree.fillTree('(())((()())())');
console.log(mytree.tree);
mytree.validateTree();


function validParentheses(parens){
    

    //Print 
    arr = [];
    arr = tree.tree;
    console.log(arr);
    // arr.forEach(node => {
    //     console.log('Depth: ' + index + ' Value: ' + element);
    // });

  }

  //
//validParentheses('(())((()())())'); //true
//print(validParentheses('()')); //true
//print(validParentheses(')(()))')); //false
//print(validParentheses(')(')); //false
//print(validParentheses('(')); //false
//print(validParentheses('())')); //false
//print(validParentheses('(())(((())())())(')); //false