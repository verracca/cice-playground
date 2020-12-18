class Class {
<<<<<<< HEAD:packages/javascript/src/classes/classes.spec.ts
  value: number;

=======
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/classes/classes.spec.js
  static hello() {
    return "hi";
  }

<<<<<<< HEAD:packages/javascript/src/classes/classes.spec.ts
  constructor(value: number) {
    this.value = value;
=======
  constructor(value) {
    this.value = value
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/classes/classes.spec.js
  }

  method() {
    return this.value;
  }
}

class ChildClass extends Class {
<<<<<<< HEAD:packages/javascript/src/classes/classes.spec.ts
  constructor(value: number) {
    super(value);
=======
  constructor(value) {
    super(value)
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/classes/classes.spec.js
  }

  childMethod() {
    return super.method()
  }

  method() {
    return this.value + 1;
  }
}

<<<<<<< HEAD
class NewClasses {
  #privateValue = 42;
  value = 42;

  static property = "hi";
=======
class GrandChild extends ChildClass {}

class NewClasses {
  static property = 'hi'
<<<<<<< HEAD
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
=======
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
>>>>>>> e33161966fc853882117b15069a83ac8be34dfe1

  value = 42
  #privateValue = 42

  getPrivateValue() {
    return this.#privateValue;
  }

  boundFunction = () => {
<<<<<<< HEAD
    return this.#privateValue;
  };
=======
    return this.#privateValue
  }

  #privateMethod() {
    return 42
  }
<<<<<<< HEAD
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
=======
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
>>>>>>> e33161966fc853882117b15069a83ac8be34dfe1
}

describe("Class", () => {
  it("should be able to make an instance", () => {
    const c = new Class(42);

    const actual = c.method();

    expect(actual).toBe(42);
  });

  it("should be able to handle inheritance", () => {
    const c = new ChildClass(42);

    const actual = c.method();

    expect(actual).toBe(43);
  });

  it("should support static methods", () => {
    const actual = Class.hello();

    expect(actual).toBe("hi");
  });

<<<<<<< HEAD
  describe("new class proposals", () => {
    it("should support field declarations (Stage 3)", () => {
      const c = new NewClasses();

      const actual = c.value;

      expect(actual).toBe(42);
    });

    it("should support static field declarations (Stage 3)", () => {
      const actual = NewClasses.property;

      expect(actual).toBe("hi");
    });

    it("should support private fields and methods (Stage 3)", () => {
      const c = new NewClasses();

      const actual = c.getPrivateValue();

      expect(actual).toBe(42);
    });
  });
});
=======
  it('should support field declarations (Stage 3)', () => {
    const c = new NewClasses()

    const actual = c.value

    expect(actual).toBe(42)
  })

  it('should support static field declarations (Stage 3)', () => {
    const actual = NewClasses.property

    expect(actual).toBe('hi')
  })

  it('should support private fields and methods (Stage 3)', () => {
    const c = new NewClasses()

    const actual = c.getPrivateValue()

    expect(actual).toBe(42)
  })
})
<<<<<<< HEAD
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
=======
>>>>>>> 2850556c7a8e66c60f09fad74694b53befc98165
>>>>>>> e33161966fc853882117b15069a83ac8be34dfe1
