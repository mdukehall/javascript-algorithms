/*jshint esversion: 6 */
/* Takes in a string of lowercase characters and returns a ratio of [lengths of errors]/[length of total]
where errors = any letter greater than m */

function printerError(s) {
    errors = [];
    result = '';

    for (i = 0; i < s.length; i++) {
        if (s[i] > 'm') { errors.push(s[i]); }
    }

    result = errors.length + '/' + s.length;
    return result;
}

function printerErrorsRegEx(s) {
    //Rhino does not recognize input parameter as an array.
    print(s);
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

print(printerError('aaabbbbhaijjjm'));
print(printerError('aaabbbbhaijjjmyyz'));
print(printerError('aaabbrrrrbbhaijjjmqqqqq'));

print(printerErrorsRegEx('aaabbbbhaijjjm'));
print(printerErrorsRegEx('aaabbbbhaijjjmyyz'));
print(printerErrorsRegEx('aaabbrrrrbbhaijjjmqqqqq'));