const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) {
        swapIdx = j;
      }
    }
    swap(arr, i, swapIdx);
  }
  return arr;
};

function findMedian(arr) {
  "use strict";
  const array = selectionSort(arr);
  const medianvalue = Math.floor(array.length / 2);

  return array[medianvalue];
}

describe.skip("Median Sort", () => {
  it("Should find the median", () => {
    const arr = [2, 4, 1, 5, 6];
    expect(findMedian(arr)).toEqual(4);
  });
});
