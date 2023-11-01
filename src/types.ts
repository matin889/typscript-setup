{
  type Person = {
    name: string;
    age: number;
    license: boolean;
  };

  const person: Person[] = [
    {
      name: "Matin",
      age: 40,
      license: true,
    },
    {
      name: "Happy",
      age: 33,
      license: false,
    },
  ];

  const user = (users: Person[]) => {
    return users.map((user) => {
      return `Welcome ${user.name}`;
    });
  };
  console.log(user(person));
}
{
  let name: string = "Habib";
  let num: number = 100;
  let bol: boolean = true;
  let undef: undefined = undefined;
  let nul: null = null;

  let anything: any;

  anything = 200;
  anything = "Matin";
  anything = true;

  // Function using 'any' type

  const add = (a: any, b: any): any => {
    return a + b;
  };
  console.log(add(12, 8));

  // Function using built-in type
  const greet = (name: string): string => {
    return name;
  };

  const greeting: string = greet("Abdul");

  console.log("welcome", greeting);

  // Nullable types
  let nullableValue: number | null = null;
  console.log("NullableValue: ", nullableValue);

  //Undefined type
  let undefinedValue: undefined = undefined;
  console.log("UndefinedValue: ", undefinedValue);
}
