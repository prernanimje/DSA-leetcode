//2625. Flatten Deeply Nested Array
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

var flat = function (arr, n) {
    const stack=[...arr.map(item=>[item,n])];
    const result = [];

  while (stack.length > 0) {
    const [item, n] = stack.pop();

    if (Array.isArray(item) && n > 0) {
      stack.push(...item.map(subItem => [subItem, n - 1]));
    } else {
      result.push(item);
    }
  }
  return result.reverse();
};