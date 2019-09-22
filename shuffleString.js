/*jshint esversion: 6 */
/*
PROBLEM: Write a function shuffle(string). The function takes a string input. 
OUTPUT: A rearrangement of the characters such that no character is repeated. 
EDGE CASE: If it is not possible, return null
*/

function shuffle(s) {
    let answer = "";
    let leftovers = [];
    //Sort the string
    let sorted = s.toUpperCase().split('').sort();
    console.log(sorted);
    //Loop through string and build a new string 
    sorted.forEach(function(element, i) {
        
        //sum += parseInt(element)*seq[i%6];
      });
    console.log("answer: "+answer+" leftovers: "+leftovers);

    return answer;
}

console.log(shuffle('ABCAA'));