function add(a = 1, b = 1) {
  return a + b;
}

<<<<<<< HEAD:packages/javascript/src/default-parameters/default-parameters.spec.ts
function defaultParametersWithObject(
  { foo = 2, bar = "qux" }: { foo?: number; bar?: string } = { foo: 1, bar: "baz" }
) {
  return { foo, bar };
=======
function defaultParametersWithObject(obj = { foo: 1, bar: 2 }) {
  return obj.foo + obj.bar
}

function defaultParametersWithDestructuredObject(
  { foo = 2, bar = 'qux' } = { foo: 1, bar: 'baz' }
) {
  return { foo, bar }
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/default-parameters/default-parameters.spec.js
}

<<<<<<< HEAD
describe("add", () => {
  it("should add", () => {
    const actual = add(1, 2);
=======
describe('default parameters', () => {
  it('should be able to use regular parameters', () => {
    const actual = add(1, 2)
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165

    expect(actual).toBe(3);
  });

  it("should have default values", () => {
    const actual = add();

    expect(actual).toBe(2);
  });

  it("should handle undefined when setting default value manually", () => {
    const actual = add(undefined, 2);

    expect(actual).toBe(3);
  });

<<<<<<< HEAD:packages/javascript/src/default-parameters/default-parameters.spec.ts
  it("should work with default value for whole object", () => {
    const actual = defaultParametersWithObject();

    expect(actual).toEqual({ foo: 1, bar: "baz" });
  });

  it("should work with default value for single property of object", () => {
    const actual = defaultParametersWithObject({ foo: 2 });
=======
  it('should work with default non destructured values for whole object', () => {
    const actual = defaultParametersWithObject()

    expect(actual).toBe(3)
  })

  it('should work with default value for whole object', () => {
    const actual = defaultParametersWithDestructuredObject()

    expect(actual).toEqual({ foo: 1, bar: 'baz' })
  })

  it('should work with default value for single property of object', () => {
    const actual = defaultParametersWithDestructuredObject({ foo: 2 })
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/default-parameters/default-parameters.spec.js

    expect(actual).toEqual({ foo: 2, bar: "qux" });
  });

<<<<<<< HEAD:packages/javascript/src/default-parameters/default-parameters.spec.ts
  it("should work without default values", () => {
    const actual = defaultParametersWithObject({ foo: 42, bar: "hi" });
=======
  it('should work without default values', () => {
    const actual = defaultParametersWithDestructuredObject({ foo: 42, bar: 'hi' })
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/default-parameters/default-parameters.spec.js

    expect(actual).toEqual({ foo: 42, bar: "hi" });
  });
});
