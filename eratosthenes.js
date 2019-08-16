function sieveOfEratosthenes(n) {
    /* Returns all prime numbers up to input variable as an array
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