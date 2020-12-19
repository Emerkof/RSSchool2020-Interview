function reverse(arr) {
  return arr.reduce((acc, cur, index) => { acc.push(arr[arr.length - 1 - index]); return acc },[]);
}

console.log(reverse([20, 31, 1, 0]));








