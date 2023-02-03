const months = ['Jan', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the orginal array.
const partial = months.splice(2, 5,);
console.log(partial);
console.log(months);