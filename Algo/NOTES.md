# Algorithms

## Big O

Meant to generalize the growth of your algorithm.

Example: `O(N)` (O of n), the algorithm will grow linearly based on input.

```ts
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
    // The charCodeAt() method of String values returns an integer
    // between 0 and 65535 representing the UTF-16 code unit at the given index.
  }
  return sum;
}
```

### Important concepts

- Look for loops
- Drop the constants (`0(2N)` same as `0(N)`)
- In BigO we often consider the worst case, even if a function could terminate earlier
  (In practice tho, O(xN) slower than O(N^2) for small input)
