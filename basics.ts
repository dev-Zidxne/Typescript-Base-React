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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Zidane",
  age: 12,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

//Type Inference

let course: string | number = "React - The Complete Guide";

course = 12234;
