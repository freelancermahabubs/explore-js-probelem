function add(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'please enter a number'
  }
  return num1 + num2;
}

const result = add(12, 45);
// console.log(result);

function multiply(num1, num2) {
  return num1 * num2
}

const output = multiply(12, 45);
console.log(output);

let sum = 0;
for(let i = 0; i <= 3; i++){
  sum = sum + i;
  console.log(sum);
}
