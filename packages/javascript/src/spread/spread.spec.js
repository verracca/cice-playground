describe("spread", () => {
  it("should spread properties in arrays", () => {
    const parts = [1, 2];
    const parts2 = [3, 4];

    const actual = [...parts, ...parts2];

    expect(actual).toEqual([1, 2, 3, 4]);
  });

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
    });
  });

<<<<<<< HEAD:packages/javascript/src/spread/spread.spec.ts
  it("should group all arguments in a function", () => {
    function foo(...args: number[]) {
      return args.map(arg => arg ** 2);
=======
  it('should group all arguments in a function', () => {
    function foo(...args) {
      return args.map(arg => arg ** 2)
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/spread/spread.spec.js
    }

    const actual = foo(1, 2, 3);

    expect(actual).toEqual([1, 4, 9]);
  });
});
