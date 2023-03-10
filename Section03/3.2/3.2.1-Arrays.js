// create an Array using an Array literal
const arr = [1, 2, 3, 4];
// access the 1st item in the Array
arr[0];
// access the last item in the Array
arr[3];
// print the length of the Array
console.log(arr.length);
// use the length property to access the last item in the Array
arr[arr.length - 1];
// with for...of, loop over the Array, modify the value and add to a different Array
for (let num of arr) {
  console.log(num);
}
