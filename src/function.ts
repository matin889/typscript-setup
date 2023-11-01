{
  const multiply = (a: number, b: number): number => a * b;

  function greet(
    name: string,
    age?: number,
    greeting: string = "Hello"
  ): string {
    return `${greeting}, ${name}${age ? ` (${age} years old)` : ""}!`;
  }

  console.log(greet("Alice")); // Hello, Alice!
  console.log(greet("Bob", 30)); // Hello, Bob (30 years old)!
  console.log(greet("Charlie", 25, "Hi")); // Hi, Charlie (25 years old)!

  function summa(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  console.log(summa(1, 2, 3, 4, 5)); // 15

  function combine(a: string, b: string): string;
  function combine(a: number, b: number): number;
  function combine(a: any, b: any): any {
    return a + b;
  }

  console.log(combine("Hello, ", "World")); // "Hello, World"
  console.log(combine(3, 5)); // 8

  function applyOperation(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
  ): number {
    return operation(a, b);
  }

  const result = applyOperation(10, 5, (x, y) => x * y);
  console.log(result); // 50
}
