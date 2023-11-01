let id: number | string;

id = "12";
id = 15;
//id = true; type 'boolean' is not assignable to type 'string | number'.ts(2322)

function displayValue(value: number | string) {
  console.log(value);
}
displayValue("Tweleve");
displayValue(12);

type User = {
  name: string;
  age: number;
};

type Proffesion = {
  role: string;
};

type userDetails = User & Proffesion;

const user: userDetails = {
  name: "Abdul",
  age: 23,
  role: "admin",
};

console.log(user);

type Greeter = (name: string) => string;
type Farewell = (name: string) => string;

type greeterFarewell = Greeter & Farewell;

// function sayHelloAndGoodbye(name): greeterFarewell {
//   return `Hello ${name} Goodbye ${name}`;
// }
const sayHelloAndGoodbye: greeterFarewell = (name) => {
  return `Hello ${name} Goodbye ${name}`;
};
console.log(sayHelloAndGoodbye("Abdul"));
