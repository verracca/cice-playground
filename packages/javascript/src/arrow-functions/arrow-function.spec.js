function regularFunction() {
  return 42;
}

const arrowFunction = () => {
  return 42;
};

const arrowFunctionWithImplicitReturn = () => 42;

<<<<<<< HEAD:packages/javascript/src/arrow-functions/arrow-function.spec.ts
const arrowFunctionWithParameters = (a: number, b: number) => a + b;
const arrowFunctionWithSingleParameter = (a: number) => a;
const arrowFunctionWithSingleParameterAlternative: ArrowFunction = a => a;

type ArrowFunction = (a: number) => number;
=======
const arrowFunctionWithParameters = (a, b) => a + b
// prettier-ignore
const arrowFunctionWithSingleParameter = (a) => a
const arrowFunctionWithSingleParameterAlternative = a => a
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/arrow-functions/arrow-function.spec.js

describe("arrow-function", () => {
  it("should execute properly", () => {
    expect(regularFunction()).toBe(42);
    expect(arrowFunction()).toBe(42);
    expect(arrowFunctionWithImplicitReturn()).toBe(42);
    expect(arrowFunctionWithParameters(1, 2)).toBe(3);
    expect(arrowFunctionWithSingleParameter(1)).toBe(1);
    expect(arrowFunctionWithSingleParameterAlternative(1)).toBe(1);
  });

  it("should be used with arrays", () => {
    const array = [1, 2, 3];

    const actual = array.map(x => x ** 2);

<<<<<<< HEAD:packages/javascript/src/arrow-functions/arrow-function.spec.ts
    expect(actual).toEqual([1, 4, 9]);
  });
});
=======
    expect(actual).toEqual([1, 4, 9])
  })

  it('should not have a lexical this with a name funtion', () => {
    function Person() {
      this.age = 42
      return {
        getAge: function () {
          return this.age
        }
      }
    }
    const person = new Person()
    const actual = person.getAge()

    expect(actual).toBeUndefined()
  })

  it('should have a lexical this with an arrow', () => {
    function Person() {
      this.age = 42
      return {
        getAge: () => {
          return this.age
        }
      }
    }
    const person = new Person()
    const actual = person.getAge()

    expect(actual).toBe(42)
  })
})
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/arrow-functions/arrow-function.spec.js
