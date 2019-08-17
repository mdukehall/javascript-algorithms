function fibMemo(index, cache) {
    /*
    Fibonacci using recursion with memoization
    Definitions:
    Fibonacci: The Fibonacci sequence is a set of numbers that starts with a one or a zero, followed by a one, and proceeds based on the rule that each number (called a Fibonacci number) is equal to the sum of the preceding two numbers.
    Memoization: An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
    Algorithm: 
    1. Unless we were passed a cache as an input paramter, create a cache array
    2. Base Case: If the cache array for the input index exists, return the result (done!)
    3. Base Case: If the index is less than 3, return 1
    4. Else (memoization) cache the result of the recursive calls for N-1 + N-2 (fibonacci)
    */
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
        if (index < 3) return 1;
        else {
            cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
        }
    }
    return cache[index];
}

print(fibMemo(200));