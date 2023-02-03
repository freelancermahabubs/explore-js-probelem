const phones = [
  {name: 'Samsung', camera: 12, storage: '92gb', price: 36000, color: 'silver'},
  {name: 'Walton', camera: 15, storage: '38gb', price: 22000, color: 'silver'},
  {name: 'iphone', camera: 17, storage: '22gb', price: 820000, color: 'silver'},
  {name: 'Xamoi', camera: 10, storage: '32gb', price: 52000, color: 'silver'},
  {name: 'Oppo', camera: 50, storage: '38gb', price: 20000, color: 'silver'},
  {name: 'Nokia', camera: 60, storage: '220gb', price: 44000, color: 'silver'},
  {name: 'HTC', camera: 880, storage: '455gb', price: 6201000, color: 'silver'},
];

// function cheapestPhone(phones) {
//   let cheapest = phones[0];
// for(let i = 0; i < phones.length; i++) {
//   const phone = phones[i];
//   if(phone.price < cheapest.price){
//     cheapest = phone;
//   }
// }
// return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);


// function cheapestPhone(phones){
//   let cheapest = phones[0]
//   for(let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     if(phone.camera < cheapest.camera) {
//       cheapest = phone;
//     }
//   }
//   return cheapest

// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

function cheapestPhone(phones){
  let cheapest = phones[0];
for(let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  if(phone.storage < cheapest.storage){
    cheapest = phone;
  }
}
return cheapest
}
const mySelections = cheapestPhone(phones);
console.log(mySelections);