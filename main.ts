/*Seeing the World: Think of at least five places in the world you’d like to visit.
Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let locations:string[]  = ["Baku", "London", "New York", "Dubai", "Amazon"];

//printing array in its origianl order.
console.log(locations);

//Print your array in alphabetical order without modifying the actual list.
let alphabetical_order = [...locations].sort();
console.log("array in alphabetical order:");
console.log(alphabetical_order);

//Show that your array is still in its original order by printing it.
console.log("array is still in its original order:");
console.log(locations);

//Print your array in reverse alphabetical order without changing the order of the original list.
alphabetical_order.reverse();
console.log("array in reverse alphabetical order:");
console.log(alphabetical_order);

//Show that your array is still in its original order by printing it again.
console.log("array is still in its original order:");
console.log(locations);

//Reverse the order of your list. Print the array to show that its order has changed.
let reverse_original:string[] = locations.reverse();
console.log("reverse the original list:");
console.log(locations);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
reverse_original.reverse();
console.log("now the list is in its original order:");
console.log(locations);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let alphabetical_original:string [] = locations.sort();
console.log("original list has changed into alphabetical order:");
console.log(alphabetical_original);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
alphabetical_original.reverse()
console.log("the list is in reverse alphabetical order:");
console.log(locations)





