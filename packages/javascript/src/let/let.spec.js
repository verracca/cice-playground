<<<<<<< HEAD
describe("let", () => {
  it("should not create a scoped this", () => {
=======
describe('let', () => {
  it('should not create a scoped this inside a block', () => {
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75
    {
      var a = 1;
    }

    expect(a).toBe(1);
  });

<<<<<<< HEAD
  it("should create a scoped this", () => {
=======
  it('should create a scoped this inside a block', () => {
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75
    {
      let a = 1;
    }

    expect(() => {
      a;
    }).toThrowError();
  });
});
