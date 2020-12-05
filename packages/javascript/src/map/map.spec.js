<<<<<<< HEAD:packages/javascript/src/map-and-set/map-and-set.spec.js
describe("map", () => {
  it("should set a value with key foo and value bar", () => {
    const map = new Map();
=======
describe('map', () => {
  it('should store values in key and value object', () => {
    const map = {}

    map.foo = 'bar'

    expect(map).toEqual({ foo: 'bar' })
  })

  it('should set a value with key foo and value bar', () => {
    const map = new Map()
>>>>>>> b01f34bca04bfb37b9739dd70278bcb063579dd1:packages/javascript/src/map/map.spec.js

    map.set("foo", "bar");

    expect(map).toEqual(new Map([["foo", "bar"]]));
  });

<<<<<<< HEAD:packages/javascript/src/map-and-set/map-and-set.spec.ts
  it("should set some value and get it", () => {
    const map = new Map<string, string>();
=======
  it('should set some value and get it', () => {
    const map = new Map()
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/map-and-set/map-and-set.spec.js

    map.set("foo", "bar");
    const actual = map.get("foo");

<<<<<<< HEAD:packages/javascript/src/map-and-set/map-and-set.spec.js
    actual?.anchor("s");
    if (actual !== undefined) {
      actual.anchor("s");
    }

    expect(actual).toBe("bar");
  });
=======
    expect(actual).toBe('bar')
  })
>>>>>>> b01f34bca04bfb37b9739dd70278bcb063579dd1:packages/javascript/src/map/map.spec.js

  it("should tell me the size", () => {
    const map = new Map();

    map.set("foo", "bar");
    map.set("bar", "baz");
    const actual = map.size;

    expect(actual).toBe(2);
  });

  it("should check that it has some value", () => {
    const map = new Map();

    map.set("foo", "bar");
    const actual = map.has("foo");

    expect(actual).toBe(true);
  });

  it("should check that it has some value after deleting a value", () => {
    const map = new Map();

    map.set("foo", "bar");
    map.delete("foo");
    const actual = map.has("foo");

    expect(actual).toBe(false);
  });

  it("should delete all values", () => {
    const map = new Map();

    map.set("foo", "bar");
    map.set("bar", "baz");
    map.clear();

    const foo = map.has("foo");
    expect(foo).toBe(false);
    const bar = map.has("bar");
    expect(bar).toBe(false);
  });

<<<<<<< HEAD:packages/javascript/src/map-and-set/map-and-set.spec.ts
  it("should execute a callback for each value", () => {
    const map = new Map();
    const calls: Record<string, string>[] = [];
=======
  it('should execute a callback for each value', () => {
    const map = new Map()
    const calls = []
>>>>>>> f770a2b236a5772aaca186083e20c8c5614cff75:packages/javascript/src/map-and-set/map-and-set.spec.js

    map.set("foo", "bar");
    map.set("bar", "baz");
    map.forEach((value, key) => calls.push({ value, key }));

    expect(calls).toEqual([
      { key: "foo", value: "bar" },
      { key: "bar", value: "baz" }
    ]);
  });

  it("should be transformed to an array", () => {
    const map = new Map();

    map.set("foo", "bar");
    map.set("bar", "baz");
    const actual = Array.from(map);

    expect(actual).toEqual([
      ["foo", "bar"],
      ["bar", "baz"]
    ]);
  });

  it("should be iterated with a for loop", () => {
    const map = new Map();
    map.set("foo", "bar");
    map.set("bar", "baz");
    const actual = [];

<<<<<<< HEAD:packages/javascript/src/map-and-set/map-and-set.spec.js
    for (let item of map) {
      actual.push(item);
=======
    for (const item of map) {
      actual.push(item)
>>>>>>> b01f34bca04bfb37b9739dd70278bcb063579dd1:packages/javascript/src/map/map.spec.js
    }

    expect(actual).toEqual([
      ["foo", "bar"],
      ["bar", "baz"]
    ]);
  });
});
