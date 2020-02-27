const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

function bigSorting(arr) {
  "use strict";
  let numericArray = [];

  for (let i = 0; i < arr.length; i++) {
    numericArray.push(parseInt(arr[i]));
  }

  for (let j = 0; j < numericArray.length; j++) {
    let swapIndex = j;

    for (let k = j + 1; k < numericArray.length; k++) {
      if (numericArray[k] < numericArray[swapIndex]) {
        swapIndex = k;
      }
    }
    swap(numericArray, j, swapIndex);
  }
  return numericArray;
}

test.skip("it should sort and return an arr with an ascending order", () => {
  const array = ["6", "1", "3", "10", "5", "31415926535897932384626433832795"];
  expect(bigSorting(array)).toEqual([
    1,
    3,
    5,
    6,
    10,
    31415926535897932384626433832795
  ]);
});
