/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
array_diff([1,2],[1]) == [2]
array_diff([1,2,2,2,3],[2]) == [1,3]
*/
function array_diff(a, b) {
    var result = [];
    print('a: ' + a);
    print('b: ' + b);
    for (var i = 0; i < a.length ; i++) {
        print('a[i]: ' + a[i] + ' is included in b: ' + b);
        print('includes shows: ' + b.includes(a[i]));
        if (b.includes(a[i]) == false) {
            print('I am here');
            result.push(a[i]);
            print('result: ' + result);
        }
    }
    print('result: ' + result);
    return result;
}

print(array_diff([1,2],[1]));
print(array_diff([1,2,2,2,3],[2]));