const country = 'Bangaldesh';
const age = 52;
const isIndependent = true;
const stundet = {id: 121, class: 11, Name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof stundet);
// Check array using array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// ------------------
console.log(friends.includes(21));


if(friends.indexOf(252) !== -1){

}

// concat : 
const newFriendsAge = [12, 50, 30, 39];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);

console.log(Array.isArray(newFriendsAge));

if(newFriendsAge.indexOf(555) !== -1) {
console.log(newFriendsAge);
}
