const cache = {};

const fib = n => {
  if (cache[n] !== undefined) {
    return cache[n];
  }

  const value = n < 2 ? n : fib(n - 2) + fib(n - 1);

  cache[n] = value;

  return value;
};
