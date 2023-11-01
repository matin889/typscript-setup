// Using the "[]" syntax
let numbers: number[] = [1, 2, 3, 4, 5];

// Using the "Array<elementType>" syntax
let fruits: Array<string> = ["apple", "banana", "cherry"];

let firstNumber: number = numbers[0]; // Access the first element (1)
let secondFruit: string = fruits[1]; // Access the second element ("banana")

numbers.push(6); // Add an element to the end of the array
fruits.unshift("grape"); // Add an element to the beginning of the array

numbers.pop(); // Remove the last element from the array
fruits.shift(); // Remove the first element from the array

numbers[2] = 42; // Update the third element to 42
fruits[0] = "pear"; // Update the first element to "pear"

let moreFruits: string[] = ["strawberry", "blueberry"];
let allFruits: string[] = fruits.concat(moreFruits); // Concatenate arrays

// Using the 'map' method
let doubledNumbers: number[] = numbers.map((num) => num * 2);

// Using the 'filter' method
let evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);

// Using the 'reduce' method
let sum: number = numbers.reduce((acc, current) => acc + current, 0);

// Using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using a for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
