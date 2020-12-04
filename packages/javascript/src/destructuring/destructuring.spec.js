<<<<<<< HEAD
describe("destructuring", () => {
  it("should destructure keys of an object", () => {
    const obj = { a: 1, b: 2, c: 3 };

<<<<<<< HEAD:packages/javascript/src/destructuring/destructuring.spec.ts
    function foo({ a, b }: Record<string, number>) {
      return a + b;
=======
=======
describe('destructuring', () => {
  it('should use keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 }

    function foo(obj) {
      return obj.a + obj.b
    }

    const actual = foo(obj)

    expect(actual).toBe(3)
  })

  it('should destructure keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 }
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
    function foo({ a, b }) {
      return a + b
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/destructuring/destructuring.spec.js
    }

    const actual = foo(obj);

    expect(actual).toBe(3);
  });

<<<<<<< HEAD
  it("should destructure keys of an array", () => {
    const array = [1, 2, 3, 4];

<<<<<<< HEAD:packages/javascript/src/destructuring/destructuring.spec.ts
    function foo([a, b, , c]: number[]) {
      return a + b + c;
=======
=======
  it('should destructure keys of an object independent of order', () => {
    const obj = { a: 1, b: 2, c: 3 }
    function foo({ b, a }) {
      return a + b
    }

    const actual = foo(obj)

    expect(actual).toBe(3)
  })

  it('should alias destructured keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    function foo({ a: pepito, b }) {
      return pepito + b
    }

    const actual = foo(obj)

    expect(actual).toBe(3)
  })

  it('should destructure keys of a nested object', () => {
    const { c } = { a: 1, b: 2, c: { d: { f: 4 } } }
    const { d } = c
    const { f } = d

    expect(f).toBe(4)
  })

  it('should destructure keys of a nested object in a single line', () => {
    const {
      c: {
        d: { f }
      }
    } = { a: 1, b: 2, c: { d: { f: 4 } } }

    expect(f).toBe(4)
  })

  it('should use values of an array', () => {
    const array = [1, 2, 3, 4]
    function foo(array) {
      return array[0] + array[1] + array[3]
    }

    const actual = foo(array)

    expect(actual).toBe(7)
  })

  it('should destructure keys of an array', () => {
    const array = [1, 2, 3, 4]
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
    function foo([a, b, , c]) {
      return a + b + c
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/destructuring/destructuring.spec.js
    }

    const actual = foo(array);

    expect(actual).toBe(7);
  });

<<<<<<< HEAD
  it("should ignore one or more of the keys", () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
=======
  it('should get the first element of an array', () => {
    const [firstElement] = [1, 2, 3]

    expect(firstElement).toEqual(1)
  })

  it('should destructure an object using variables', () => {
    const { a, b } = { a: 1, b: 2, c: 3 }

    expect(a).toBe(1)
    expect(b).toBe(2)
  })

  it('should destructure an object using variables', () => {
    const [a, , b] = [1, 2, 3]

    expect(a).toBe(1)
    expect(b).toBe(3)
  })

  it('should ignore one or more of the keys', () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 }
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165

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
