function fibonacci_sequnce(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci_sequnce(7)); // [0,1,1,2,3,5,8]
console.log(fibonacci_sequnce(5)); //[0,1,1,2,3]
console.log(fibonacci_sequnce(3)); //[0,1,1]

// Big O Notasion is O(n)
