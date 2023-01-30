// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function example(param1, param2 = 5) {
  console.log(param1, param2);
  return param1 + param2;
}
// invoke the function and pass in two numbers
example(2, 3);
// invoke the function and pass in more than two numbers
example(2, 3, 4, 5);
// invoke the function and pass in only one number
example(2);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
example(2);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
