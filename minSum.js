function minSum (arr) {
 //var sorted = arr.sort((a,b) => a - b);
 arr.sort((a,b) => a-b);
 print('sorted: ' + arr.sort((a,b) => a-b));
 var results = 0;
 for (i=0; i < Math.floor(arr.length/2); i++) {
    
    results += parseInt(arr[i]) * parseInt(arr[arr.length - (i+1)]);
    print('1st: ' + arr[i] + ' 2nd: ' + arr[arr.length - (i+1)]);
 }
 return results;
}

print(minSum([5,4,2,3])); //22
print(minSum([12,6,10,26,3,24])); //342
print(minSum([9,2,8,7,5,4,0,6])); //74