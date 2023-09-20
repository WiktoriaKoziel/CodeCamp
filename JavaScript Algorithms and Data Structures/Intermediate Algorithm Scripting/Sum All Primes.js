#task
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

#solution
function sumPrimes(num) {
  // Create an empty array to store prime numbers.
  let primes = [];
  // Loop through all numbers from 2 to 'num'.
  for (let i = 2; i <= num; i++) {
    // Check if 'i' is prime by testing it against all previously found prime numbers.
    if (primes.every((prime) => i % prime !== 0)) {
      // If 'i' is prime, add it to the 'primes' array.
      primes.push(i);
    }
  }
  // Calculate the sum of all prime numbers in the 'primes' array.
  return primes.reduce((sum, prime) => sum + prime, 0);
}
