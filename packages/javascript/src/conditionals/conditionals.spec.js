describe("conditionals", () => {
  it("ternary", () => {
    const value = true;

    const actual = value ? "foo" : "bar";

    expect(actual).toBe("foo");
  });

<<<<<<< HEAD
<<<<<<< HEAD
  it("ternary", () => {
    const value = true;
=======
=======
  it('nested ternary', () => {
    const value = false
    const value2 = false

    const actual = value ? 'foo' : value2 ? 'bar' : 'baz'

    expect(actual).toBe('baz')
  })

>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
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

  it('not early return', () => {
    function foo(value) {
      if (value === 1) {
        return 'bar'
      } else {
        return 'baz'
      }
    }

    const actual = foo(1)

    expect(actual).toBe('bar')
  })

  it('early return', () => {
    function foo(value) {
      if (value === 1) {
        return 'bar'
      }

      return 'baz'
    }

    const actual = foo(1)

    expect(actual).toBe('bar')
  })

  it('guards', () => {
    function foo(value) {
      if (value === undefined) {
        throw new Error("value can't be undefined")
      }

      return 'foo'
    }

    expect(() => {
      foo(undefined)
    }).toThrowError(new Error("value can't be undefined"))
  })
})
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75
