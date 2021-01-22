describe("conditionals", () => {
  it("ternary", () => {
    const value = true;

    const actual = value ? "foo" : "bar";

    expect(actual).toBe("foo");
  });

<<<<<<< HEAD
  it("ternary", () => {
    const value = true;
=======
  it('if else', () => {
    const value = true
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75

    let actual;
    if (value) {
      actual = "foo";
    } else {
      actual = "bar";
    }

    expect(actual).toBe("foo");
  });

<<<<<<< HEAD
  it("&&", () => {
    const value = true;
=======
  it('&& with true', () => {
    const value = true
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75

    const actual = value && "foo";

    expect(actual).toBe("foo");
  });

<<<<<<< HEAD
  it("&&", () => {
    const value = false;
=======
  it('&& with false', () => {
    const value = false
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75

    const actual = value && "foo";

    expect(actual).toBe(false);
  });

<<<<<<< HEAD
  it("&&", () => {
    const value = false;
=======
  it('if without comparison', () => {
    const value = false
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75

    let actual = false;

    if (value) {
      actual = "foo";
    }

    expect(actual).toBe(false);
  });

<<<<<<< HEAD
  it("&&", () => {
    const value = undefined;

    const actual = value === undefined;

    expect(actual).toBe(true);
  });

  it("&&", () => {
    const value = undefined;
=======
  it('if with comparison and assignment', () => {
    const value = undefined
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75

    let actual;
    if (value === undefined) {
      actual = true;
    } else {
      actual = false;
    }

    expect(actual).toBe(true);
  });

<<<<<<< HEAD
  it("&&", () => {
    const value = undefined;

    const actual = { pepito: value === undefined };

    expect(actual).toEqual({ pepito: true });
  });
});
=======
  it('simplified', () => {
    const value = undefined

    const actual = value === undefined

    expect(actual).toBe(true)
  })

  it('assign value to object', () => {
    const value = undefined

    const actual = { foo: value === undefined }

    expect(actual).toEqual({ foo: true })
  })
})
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75
