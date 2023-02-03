const names = ['Abul', 'Babul', 'Babul', 'Cabul', 'Cabul', 'Dabul', 'Ebul', 'Babu', 'Abul', 'Khabul', 'Gabul', 'Cabul', 'Babul', 'Abul', 'Abul', 'Abul'];




function removeDuplicate(names) {
  const unique = [];
  for(let i = 0; i < names.length; i++) {
    const name = names[i];
    if(unique.includes(name) === false){
      unique.push(name);
    }
  }
return unique;
}

const uniqNames = removeDuplicate(names);
console.log(uniqNames);












// function removeDuplicate(names) {
//   const unique = [];
//   for(let i = 0; i < names.length; i++){
//     const name = names[i];
//     if(unique.includes(name) === false) {
//       unique.push(name);
//     }
//   }
//   return unique;

// }
// const uniqNames = removeDuplicate(names);
// console.log(uniqNames)





// function removeDuplicate(names) {
//   const unique = [];
//   for(let i = 0; i < names.length; i++) {
//     const name = names[i];
//     if(unique.includes(name) === false) {
//       unique.push(name);
//     }
//   }
//   return unique;
// }

// const uniqNames = removeDuplicate(names);
// console.log(uniqNames);



