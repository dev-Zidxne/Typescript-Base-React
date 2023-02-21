// Primitives: numbers, string, boolean
//More complex types : arrays, objects
// Function types, parameters

//Primitives

let age: number;

age = 12;

let username: string;

username = "Zidane";

let isInstructor: boolean;

isInstructor = true;

// More complex tyrpes

let hobbies: string[];

hobbies = ["Sports", "Movies"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Zidane",
  age: 12,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

//Type Inference

let course: string | number = "React - The Complete Guide";

course = 12234;

// Function & Types

function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}
