function merge(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const arr = arr1.concat(arr2);
  return arr.sort((a, b) => a - b);
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
