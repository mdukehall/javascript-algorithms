function reverseInt(n) {
    /*
    Algorithm: 
        1. Convert the input variable to a string
        2. split it into an array of characters
        3. reverse the array
        4. join in back into a string
        5. convert it into an integer and multilpe the original sign of the input variable
    */
    let sign = Math.sign(n);
    print('sign: ' + sign);
    let reversed = n.toString().split('').reverse().join('');
    print('reversed string: ' + reversed);
    print('integer ' + parseInt(reversed));
    return parseInt(reversed) * Math.sign(n);

}

print(reverseInt(15));
print(reverseInt(981));
print(reverseInt(100));
print(reverseInt(200));
print(reverseInt(300));
print(reverseInt(400));
print(reverseInt(500));
print(reverseInt(600));
print(reverseInt(700));
print(reverseInt(800));
print(reverseInt(900));
print(reverseInt(-15));
print(reverseInt(-90));
//this algorithm fails for values 800, 900