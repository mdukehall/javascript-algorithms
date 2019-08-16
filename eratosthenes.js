function sieveOfEratosthenes(n) {
    /* The Greek mathematician Eratosthenes (3rd-century B.C.E) designed a quick way to find all the prime numbers. 
    Definition:
        A prime number is a whole number greater than 1 whose only divisors are 1 and itself. 
        A composite number is a whole number greater than 1 that has at least one more divisor than a prime.
    Algorithm: 
        1. Create an array the length of the input parameter and fill it with values of true
        2. Set base cases for 0 and 1 to false
        3. Step through the array from 2 until the iterator is less-than or equal-to the Square Root (√) of the input parameter
            4. Loop through whole numbers from 2 until iterator1*iterator2 is less-than or equal-to the input parameter (outside of our set of values) 
                Find the position in the primes array = iterator1*iterator2 and mark it as false (cannot be a prime)
                Example: All the numbers that are multilpes of 2 are composites.
        5. Create a results array, step through the primes array and push all "true" values to the results.        
    */
    var primes = [];
    for (i = 0; i<= n; i++) {
        primes[i] = true;
    }
    primes[0] = false;
    primes[1] = false;

    for (i=2; i<=Math.sqrt(n); i++) {
        for (var j=2; j*i <= n; j++) {
            primes[i*j] = false;
        }
    }
    
    var result = [];
    for (i=0;i<primes.length;i++){
        if (primes[i]) result.push(i);
    }
return result;
}

print(sieveOfEratosthenes(200));
