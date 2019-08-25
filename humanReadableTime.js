/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
*/
function timeConvert(num) {
    if (num <= 359999) {
        var hours = Math.floor(num / 3600);
        if (hours < 10) hours = '0' + hours;
        var minutes = Math.floor(num % 3600 / 60);
        if (minutes < 10) minutes = '0' + minutes;
        var seconds = Math.floor(num % 3600 % 60);
        if (seconds < 10) seconds = '0' + seconds;
        return hours + ':' + minutes + ':' + seconds;
    }
    else return('error: max size exceeded');
}

print(timeConvert(0)); //00:00:0
print(timeConvert(5)); //00:00:05
print(timeConvert(60)); //00:01:00
print(timeConvert(86399)); //23:59:59
print(timeConvert(359999)); //9:59:59