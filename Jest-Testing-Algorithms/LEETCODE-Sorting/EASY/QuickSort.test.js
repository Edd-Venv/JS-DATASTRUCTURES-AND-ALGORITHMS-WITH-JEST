/*
================
Complex Solution
================

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let swapIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIndex]) {
        swapIndex = j;
      }
    }
    swap(arr, i, swapIndex);
  }
  return arr;
};

const pivotValue = arr => {
  const sortedArray = selectionSort(arr);
  const sortedArrayPivot = Math.floor(sortedArray.length / 2);
  const value = sortedArray[sortedArrayPivot];
  return value;
};

function quickSort(arr) {
  "use strict";
  const pivot = pivotValue(arr);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      result.push(arr[i]);
    }
  }
  result.push(pivot);

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > pivot) {
      result.push(arr[j]);
    }
  }
  return result;
}
*/

function partitionSort(arr) {
  "use strict";
  const p = arr[0];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < p) {
      result.unshift(arr[i]);
    }
  }
  result.push(p);

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > p) {
      result.push(arr[j]);
    }
  }
  return result;
}

describe.skip("Quick Sort(Partition Sort)", () => {
  it("should partion an array about a pivot(centre value)", () => {
    const arr = [5, 7, 4, 3, 8];
    expect(partitionSort(arr)).toEqual([3, 4, 5, 7, 8]);
  });
});

describe.skip("Quick Sort(Partition Sort)", () => {
  it("should partion an array about a pivot(centre value)", () => {
    const arr = [5, 7, 4, 3, 8];
    expect(quickSort(arr)).toEqual([3, 4, 5, 7, 8]);
  });
});
