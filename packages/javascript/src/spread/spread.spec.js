<<<<<<< HEAD
describe("spread", () => {
  it("should spread properties in arrays", () => {
    const parts = [1, 2];
    const parts2 = [3, 4];

    const actual = [...parts, ...parts2];

    expect(actual).toEqual([1, 2, 3, 4]);
  });
=======
describe('spread', () => {
  it('should spread properties in arrays', () => {
    const parts = [1, 2]
    const parts2 = [4, 5]

    const actual = [...parts, 3, ...parts2]

    expect(actual).toEqual([1, 2, 3, 4, 5])
  })

  it('should copy values', () => {
    const given = [1, 2]

    const actual = [...given]
    given.push(3)

    expect(actual).toEqual([1, 2])
    expect(given).toEqual([1, 2, 3])
  })

  it('should add a new element to an array without mutating its values', () => {
    const given = [1, 2]

    const actual = [...given, 3]

    expect(given).toEqual([1, 2])
    expect(actual).toEqual([1, 2, 3])
  })
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165

  it("should spread properties in object", () => {
    const parts = {
      a: 1,
      b: 2
    };

    const actual = { ...parts, c: 3 };

    expect(actual).toEqual({
      a: 1,
      b: 2,
      c: 3
<<<<<<< HEAD
    });
  });

<<<<<<< HEAD:packages/javascript/src/spread/spread.spec.ts
  it("should group all arguments in a function", () => {
    function foo(...args: number[]) {
      return args.map(arg => arg ** 2);
=======
=======
    })
  })

  it('should overwrite properties with spread in object', () => {
    const parts = {
      a: 1,
      b: 2
    }

    const actual = { ...parts, b: 3 }

    expect(actual).toEqual({
      a: 1,
      b: 3
    })
  })

>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
  it('should group all arguments in a function', () => {
    function foo(...args) {
      return args.map(arg => arg ** 2)
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/spread/spread.spec.js
    }

    const actual = foo(1, 2, 3);

<<<<<<< HEAD
    expect(actual).toEqual([1, 4, 9]);
  });
});
=======
    expect(actual).toEqual([1, 4, 9])
  })

  it('can have other arguments', () => {
    function foo(foo, bar, ...args) {
      return args.map(arg => arg + foo + bar)
    }

    const actual = foo(1, 2, 3, 4)

    expect(actual).toEqual([6, 7])
  })
})
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
