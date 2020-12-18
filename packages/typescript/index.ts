<<<<<<< HEAD
const foo: string = "bar";
const bar: number = 1;
const baz: boolean = true;
const qux: string[] = ["bar", "baz", "qux"];
=======
const foo: string = 'foo'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417

// Type inference
const fooInferred = 'foo'
const barInferred = 1
const bazInferred = true
const quxInferred = ['bar', 'baz', 'qux']

// Null
const n: null = null;

const a: string = "bar";
// KO: a = null
<<<<<<< HEAD
const b: string | null = "bar";
=======
const b: string | null = Math.random() > 0.5 ? null : 'bar'
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
// OK: b = null

if (b !== null) {
  const l = b.length;
  console.log(l);
}

function sum(a: number, b: number = 1): number {
  return a + b;
}

const result = sum(2).toFixed(4);
console.log(result);

const substract = (a: number, b: number = 1): number => a + b
const result2 = substract(3)
console.log(result2)

function concatenate(a: string, b: string | null): string {
<<<<<<< HEAD
  if (b != null) {
    return a.concat(b);
=======
  if (b !== null) {
    return a.concat(b)
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
  }

  return a;
}

const x = concatenate("Hello", null);
const y = concatenate("Hello ", "world");

console.log(x);
console.log(y);

// Interfaces
interface Person {
<<<<<<< HEAD
  name: string;
  age: number;
  job?: string;
}

const people: Person[] = [
  { age: 42, name: "Sonia", job: "Autentia" },
  { age: 32, name: "Paul" }
];
const ages = people.reduce((a, b) => a + b.age, 0);
console.log(ages);
=======
  name: string
  age: number
  job?: string
  pet: string | undefined
}

// Types
type Car = {
  brand: string
  horsePower: number
}

// Type aliases
type Base64 = string

interface Camera {
  image: Base64
}

const people: Person[] = [
  { age: 42, name: 'Sonia', job: 'Autentia', pet: undefined },
  { age: 32, name: 'Paul', pet: 'lizard' }
]
const ages = people.reduce((a, b) => a + b.age, 0)
console.log(ages)
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417

interface Greeter {
  greet(name: string): string;
}

type GreeterPerson = Person & Greeter;
const greeterPerson: GreeterPerson = {
  age: 54,
<<<<<<< HEAD
  name: "Sara",
=======
  name: 'Sara',
  pet: undefined,
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
  greet(a: string): string {
    return "hello " + a + ", I'm " + this.name;
  }
};

const greet = greeterPerson.greet("Susan");
console.log(greet);

// Clases
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log("Moved " + distance + " meters");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distance = 5) {
    console.log(this.name + " moves...");
    super.move(distance);
  }
}

<<<<<<< HEAD
const dog = new Dog("Tobby");
dog.move();
=======
const dog = new Dog('Tobby')
dog.move()

class ClassWithPrivateMethodsAndProperties {
  publicProperty = 42
  private privateroperty = 42

  publicMethod() {
    return 42
  }

  private privateMethod() {
    return 42
  }
}

class ImprovedConstructorAssignment {
  constructor(public name: string) {}

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class ReadonlyClass {
  constructor(
    public readonly name: string,
    private readonly foo: number,
    private readonly person: Person
  ) {}

  bar(): string {
    this.person.age = 43
    return this.name + this.foo
  }
}

interface Logger {
  log(message: string): void
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message)
  }
}

class AlertLogger implements Logger {
  log(message: string) {
    alert(message)
  }
}
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
