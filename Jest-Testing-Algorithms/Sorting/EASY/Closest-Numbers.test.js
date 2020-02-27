const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const diff = (i, j) => {
  return i - j;
};

const selectionSort = arr => {
  "use strict";

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

function closestNumbers(arr) {
  "use strict";
  const array = selectionSort(arr);
  let result = [];

  for (let k = 0; k < array.length; k++) {
    let l = k + 1;

    if (diff(array[l], array[k]) === 1) {
      result.push(array[k], array[l]);
    }
  }
  return result;
}

describe.skip("Closest Numbers Sort", () => {
  it("Should determine which pairs of elements have the smallest difference.", () => {
    const arr = [5, 2, 3, 4, 1];
    expect(closestNumbers(arr)).toEqual([1, 2, 2, 3, 3, 4, 4, 5]);
  });
});

describe.skip("selectionSort", () => {
  it("should sort the array with an ascending order", () => {
    const arr = [5, 2, 3, 4, 1];
    expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});
