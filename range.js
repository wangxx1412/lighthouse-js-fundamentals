function range(start, end, step) {
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  console.log(arr);
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
