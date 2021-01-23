describe('let', () => {
  it('should not create a scoped this inside a block', () => {
    {
      var a = 1
    }

    expect(a).toBe(1)
  })

  it('should create a scoped this inside a block', () => {
    {
      let a = 1
    }

    expect(() => {
      a
    }).toThrowError()
  })
})
