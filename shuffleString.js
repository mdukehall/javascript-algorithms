/*jshint esversion: 6 */
/*
PROBLEM: Write a function shuffle(string). The function takes a string input. 
OUTPUT: A rearrangement of the characters such that no character is repeated. 
EDGE CASE: If it is not possible, return null
*/

function shuffle(s) {
    let answer = "";
    let leftovers = "";
    //Sort the string
    let sorted = s.toUpperCase().split('').sort();
    console.log(sorted);
    //Loop through string and build a new string 
    sorted.forEach(function(element, i) {
        if (answer[answer.length-1] === element) {leftovers+=element;}
        else {answer+=element;}
      });
    //console.log("answer: "+answer+" leftovers: "+leftovers);
    leftovers = leftovers.toUpperCase().split('');
    leftovers.forEach(function(element, i) {
        console.log("answer[i]: " + answer[i] + " answer[i+1] " + answer[i+1] + " element: " + element);
        if ((answer[i] !== element) || (answer[i+1] !== element)) {
            answer = answer.slice(0,i) + element + answer.slice(i,answer.length);}
        //else {answer+=element;}
      });
    console.log("answer: "+answer+" leftovers: "+leftovers);


    return answer;
}

console.log(shuffle('ABCAA'));
console.log(shuffle('JERNDHES'));
console.log(shuffle('ABCNCUEMSZAAA'));