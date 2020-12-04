<<<<<<< HEAD:packages/javascript/src/template-literals/template-literals.spec.ts
describe("template literals", () => {
  it("should handle multiline", () => {
=======
describe('template literals', () => {
  it('should interpolate values with plus', () => {
    const given = 'bar'
    const actual = 'foo' + given + '\n' + given + 'baz'

    expect(actual).toBe('foobar\nbarbaz')
  })

  it('should handle multiline', () => {
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/template-literals/template-literals.spec.js
    const actual = `lorem
ipsum
dolor
`;

    expect(actual).toBe("lorem\nipsum\ndolor\n");
  });

  it("should handle tabs", () => {
    const actual = `lorem
  ipsum
dolor
`;

    expect(actual).toBe("lorem\n  ipsum\ndolor\n");
  });

  it("should handle expressions", () => {
    const a = 1;
    const b = 2;
    const actual = `${a} + ${b} = ${a + b}`;

    expect(actual).toBe("1 + 2 = 3");
  });

<<<<<<< HEAD:packages/javascript/src/template-literals/template-literals.spec.ts
  it("should handle being executed as a function", () => {
    const taggedTemplates = (strings: TemplateStringsArray, ...values: string[]) => {
      let str = "";
=======
  it('should handle being executed as a function', () => {
    const taggedTemplates = (strings, ...values) => {
      let str = ''
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/template-literals/template-literals.spec.js
      strings.forEach((string, i) => {
        str += string + (values[i] ?? "").toUpperCase();
      });
      return str;
    };
    const world = "world";
    const actual = taggedTemplates`hello ${world}`;

    expect(actual).toBe("hello WORLD");
  });
});
