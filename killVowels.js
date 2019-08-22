/*jshint esversion: 6 */
/* Algorithm: Take in a string and return the string without any vowels (not counting y) */
function killVowels(str) {
    result = [];
    str = str.split('');
    for (i=0; i<str.length; i++) {
        if (!str[i].match(/[aeiou]/i)) {result.push(str[i]);}
    }
    return result.join('');
  }

print(killVowels('This website is for losers LOL!'));
print(killVowels('Sometimes I cut myself a piece of cake'));
print(killVowels('Put your hands in the air and wave them like you just dont care'));