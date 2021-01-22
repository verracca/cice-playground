describe("nullish coalescing operator", () => {
  it("should set default value if expression is truthy", () => {
    const actual = true || "foo";

    expect(actual).toBe(true);
  });

  it("should not set default value if expression is falsy", () => {
    const actual = false || "foo";

    expect(actual).toBe("foo");
  });

  it("should unexpectedly set value if expression is falsy", () => {
    const actual = 0 || "foo";

<<<<<<< HEAD:packages/javascript/src/nullish-coalescing-operator/nullish-coalescing-operator.spec.ts
    expect(actual).toBe(0);
  });
=======
    expect(actual).toBe('foo')
  })
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/nullish-coalescing-operator/nullish-coalescing-operator.spec.js

  it("should not unexpectedly set value if expression is falsy", () => {
    const actual = 0 ?? "foo";

    expect(actual).toBe(0);
  });

  it("should set default value if expression is null", () => {
    const actual = null ?? "foo";

    expect(actual).toBe("foo");
  });

  it("should set default value if expression is undefined", () => {
    const actual = undefined ?? "foo";

    expect(actual).toBe("foo");
  });
});
