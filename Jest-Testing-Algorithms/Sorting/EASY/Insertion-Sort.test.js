global.console = {
  log: jest.fn()
};

function insertionSort(arr) {
  "use strict";
  for (let i = arr.length - 1; i >= 0; i--) {
    let greaterIdx = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      let lowerIdx = arr[j];

      if (greaterIdx == lowerIdx) {
        continue;
      } else if (greaterIdx < lowerIdx) {
        arr[j + 1] = lowerIdx;
      } else if (greaterIdx > lowerIdx) {
        arr[j + 1] = greaterIdx;
        break;
      }
      console.log("[" + arr + "]");
    }
  }
  console.log("[" + arr + "]");
}

insertionSort([1, 2, 4, 5, 3]);

describe.skip("Insertion Sort ", () => {
  it("should console log the array each time it fails and the final sorted array.", () => {
    expect(global.console.log).toHaveBeenCalledWith(
      "[1, 2, 4, 5, 5]",
      "[1, 2, 4, 4, 5]",
      "[1, 2, 3, 4, 5]"
    );
  });
});
