// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let currentNumber = 100;
// 2) create a variable to represent the current total
let currentTotal = 0;
// 3) write a while loop that sums the numbers from 1 to 100
/*let i = 1;
while (i <= currentNumber) {
  currentTotal += 1;
  i++;
}

console.log(currentTotal);*/

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (i = 1; i <= currentNumber; i++) {
  currentTotal += 1;
}
console.log(currentTotal);
