function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    print('reversed string: ' + reversed);
    return parseInt(reversed) * Math.sign(n);
}

print(reverseInt(15));
print(reverseInt(981));
print(reverseInt(500));
print(reverseInt(-15));
print(reverseInt(-90));
//this algorithm fails for values like -900