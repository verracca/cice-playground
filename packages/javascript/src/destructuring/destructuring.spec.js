describe("destructuring", () => {
  it("should destructure keys of an object", () => {
    const obj = { a: 1, b: 2, c: 3 };

<<<<<<< HEAD:packages/javascript/src/destructuring/destructuring.spec.ts
    function foo({ a, b }: Record<string, number>) {
      return a + b;
=======
    function foo({ a, b }) {
      return a + b
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/destructuring/destructuring.spec.js
    }

    const actual = foo(obj);

    expect(actual).toBe(3);
  });

  it("should destructure keys of an array", () => {
    const array = [1, 2, 3, 4];

<<<<<<< HEAD:packages/javascript/src/destructuring/destructuring.spec.ts
    function foo([a, b, , c]: number[]) {
      return a + b + c;
=======
    function foo([a, b, , c]) {
      return a + b + c
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/destructuring/destructuring.spec.js
    }

    const actual = foo(array);

    expect(actual).toBe(7);
  });

  it("should ignore one or more of the keys", () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 };

    expect(rest).toEqual({
      b: 2,
      c: 3
    });
  });

<<<<<<< HEAD:packages/javascript/src/destructuring/destructuring.spec.ts
  it("should rename to given value", () => {
    const { a: pepe, ...rest }: Record<string, number> = { a: 1, b: 2, c: 3 };

    expect(pepe).toBe(1);
    expect(rest).toEqual({ b: 2, c: 3 });
  });
=======
  it('should rename to given value', () => {
    const { a: foo, ...rest } = { a: 1, b: 2, c: 3 }

    expect(foo).toBe(1)
    expect(rest).toEqual({ b: 2, c: 3 })
  })
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/destructuring/destructuring.spec.js

  it("should swap values", () => {
    let foo = "foo";
    let bar = "bar";

    [bar, foo] = [foo, bar];

    expect(foo).toBe("bar");
    expect(bar).toBe("foo");
  });
});
