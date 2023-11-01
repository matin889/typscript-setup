// Utility types in Typescript are some predefined generic types that can be used to manipulate or create other new types. These types are available globally in all Typescript projects, so you don't need to add any dependencies to get these going.

// #Partial
// The first utility type we will look at is Partial, which, as It sounds, makes everything optional or partial.

interface Person {
  name: string;
  age: number;
  email: string;
}

// Define a new type called 'PartialPerson' that is a partial version of 'Person'
type PartialPerson = Partial<Person>;

// Same as:
// interface Person {
//   name?: string | undefined;
//   age?: number | undefined;
//   email?: string | undefined;
// }
const person: PartialPerson = {
  name: "Aaraf",
};
console.log(person);

// Required
// The opposite to Partial is Required utility type, which makes everything required.
interface Persons {
  name?: string | undefined;
  age?: number | undefined;
  email?: string | undefined;
}

// Define a new type called 'RequiredPerson' that is a required version of 'Person'
type RequiredPerson = Required<Persons>;

// Same as:
// interface Person {
//   name: string;
//   age: number;
//   email: string;
// }

// Omit
// You can use the Omit utility type to create a new type from an existing type, however, with some properties removed.

interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserWithoutEmail = Omit<Users, "email">;

// same as:
// interface User {
//   id: string;
//   name: string;
//   age: number;
// }

// We can also remove multiple properties by passing an union
interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserWithoutEmailAndName = Omit<Users, "email" | "name">;

// same as:
// interface User {
//   id: string;
//   age: number;
// }

// Pick
// The opposite of Omit is the Pick utility type that allows you to create a new type that contains only a subset of properties from an existing type.

interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserWithEmailAndName = Pick<Users, "email" | "name">;

// same as:
// interface User {
//   name: string;
//   email: string;
// }

// Multiple utility types together
// We can even use multiple utility types together.

interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PartialPick = Partial<Pick<Users, "email" | "name">>;

// same as:
// interface User {
//   name?: string | undefined;
//   email?: string | undefined;
// }

interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

type OmitPartialPick = Omit<Partial<Pick<Users, "email" | "name">>, "email">;

// same as:
// interface User {
//   name?: string | undefined;
// }
