// wood js 
/*
fiexd: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed --.> 50 cft
vary; quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
const perChairWood = 3;
const perTableWood = 10;
const perBedWood = 50;
const chairWood = chairQuantity * perChairWood;
const tableWood = tableQuantity * perTableWood;
const bedWood = bedQuantity * perBedWood;
const totalWoods = chairWood + tableWood + bedWood;
return  totalWoods;

}

const totalWoods = woodCalculator(2, 5, 6);
console.log('Total Wood Need:', totalWoods);

// slice.js 

const friendss = [12, 45, 13, 42, 22, 41];
const partial = friendss.slice(1, 3);
console.log(partial);

// splice.js
const months = ['Jan', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const partials = months.splice(2, 4);
console.log(partials);

// array.js

const country = 'Bangaldesh';
const age = 52;
const isIndependent = true;
const stundet = {id: 121, class: 11, Name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(Array.isArray(stundet));
console.log(Array.isArray (friends));

function add(num1, num2) {
  return num1 + num2;
}
console.log(typeof add);
console.log(friends.includes (1));
if(friends.indexOf (522) === -1){
  console.log(friends);
}

// concat.js 

const newFriendsAge = [12, 50, 30, 39];
const allFriends = newFriendsAge.concat(friendss);
console.log(allFriends);
console.log(Array.isArray(newFriendsAge));
if(newFriendsAge.indexOf (255) === -1){
  console.log(newFriendsAge);
}

const names = ['Abul', 'Babul', 'Babul', 'Cabul', 'Cabul', 'Dabul', 'Ebul', 'Babu', 'Abul', 'Khabul', 'Gabul', 'Cabul', 'Babul', 'Abul', 'Abul', 'Abul'];

function removeDuplicate(names) {
  let unique = [];
  for(let i = 0; i < names.length; i++) {
    const name = names[i];
    if(unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const uniqNames = removeDuplicate(names);
console.log('this is my uniqNames:', uniqNames);

// quantity.js
const shoppingCart = [
  {name: 'shoe', price: 1200, quantity: 2 },
  {name: 'belt', price: 7000, quantity: 5 },
  {name: 'shirt', price: 2200, quantity: 4 },
  {name: 'pant', price: 3700, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for(let i = 0; i < products.length; i++) {
    const product = products[i];
    const totalExpense = product.price * product.quantity;
    sum = sum + totalExpense;
  }
  return sum
}
const expense = totalCost(shoppingCart);
console.log('Today my Total Expense is:', expense);

// cheapest.js
 const phones = [
  {name: 'Samsung', camera: '14px', storage: '32gb', price: 32100, color: 'Silver'},
  {name: 'Oppo', camera: '18px', storage: '34gb', price: 65100, color: 'Yellow'},
  {name: 'Nokia', camera: '50px', storage: '42gb', price: 60000, color: 'Purple'},
  {name: 'Realme', camera: '14px', storage: '45gb', price: 45500, color: 'Black'},
  {name: 'Vivo', camera: '182px', storage: '36gb', price: 150000, color: 'Blue'},
  {name: 'iphone', camera: '185px', storage: '102gb', price: 1500042, color: 'White'}
 ];

 function cheapestPhone(phones) {
  let cheapest = phones[0]
  for(let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if(phone.storage > cheapest.storage) {
      cheapest = phone;
    }

  }
  return cheapest;
 }
 const mySelection = cheapestPhone(phones);
 console.log(mySelection);

//  simple carts js 

const shoppingCarts = [
  {names: 'shoe', price: 1500},
  {names: 'shirt', price: 524},
  {names: 'belt', price: 200},
  {names: 'watch', price: 500},
  {names: 'mask', price: 124},
];

function totalCost(products){
  let sum = 0;
  for(let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}
const expenses = totalCost(shoppingCarts);
console.log(expenses);

/* 

Show output from: 1-50
if the number is divisible by 3 then instead of the number show 'foo'
if the number is divisible by 5 then instead of the number show 'bar'
if the number is divisible by both 3 and 5 then instead of the number show 'foobar'

*/

for(let i = 1; i <= 50; i++) {

  if(i % 3 === 0 && i % 5 === 0) {
    console.log('foobar');
  }
  
  else if(i % 3 === 0) {
    console.log('foo');
  }
  else if(i % 5 === 0) {
    console.log('bar');
  }
else {
  console.log(i);
}
}

// validation.js

function add(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Enter your Valid Number'
  }
  return num1 + num2
}
const result = add(45, '40');
console.log(result);

function multiply(num1, num2) {
  return num1 * num2;
}
const output = multiply(42, 45);
console.log(output);

// let sum = 0;
// for(let i = 0; i <= 3; i++) {
//   sum = sum + i;
//   console.log(sum);
// }

// function isPrime(num) {

//   for (let i = 3; i < num.length; i++) {
//     if (num % i === 0) return false;

//   }
//   return true;
// }
// const primeNum = isPrime(1);
// console.log(primeNum);

// function triangleArea(a, b, c) {
  
// }

/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ taka kore. rest tickets will be 90 taka per piece.
first 100 ---> 100taka
rest ---> 90taka
3.if you purchase more than 200 tickets
first ---> 100tka
101-200 ---> 90tka
200+ ---> 70taka
*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if(ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  }
  else if(ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = restTicketPrice + first100Price;
    return totalPrice;
  }
  else{
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost;
  }
}
const price = ticketPrice(201)
console.log(price);
