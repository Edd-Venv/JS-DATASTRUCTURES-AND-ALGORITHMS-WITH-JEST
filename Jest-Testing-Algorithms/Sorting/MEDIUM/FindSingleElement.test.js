function singleElement(arr) {
  "use strict";

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let previous = arr[i - 1];
    let next = arr[i + 1];

    if (current !== previous && current !== next) {
      return current;
    }
  }
}

describe.skip("Single Element", () => {
  it("Should find the only element with one occurance", () => {
    const arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
    expect(singleElement(arr)).toBe(2);
  });
});
