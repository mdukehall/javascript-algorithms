/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
array_diff([1,2],[1]) == [2]
array_diff([1,2,2,2,3],[2]) == [1,3]
*/
function array_diff(a, b) {
    for (i = 0; i < a.length; i++) {
        if (b.includes(a[i])) { a.splice(i,1);}
        }
    return a;
}

print(array_diff([1,2],[1]));
print(array_diff([1,2,2,2,3],[2]));