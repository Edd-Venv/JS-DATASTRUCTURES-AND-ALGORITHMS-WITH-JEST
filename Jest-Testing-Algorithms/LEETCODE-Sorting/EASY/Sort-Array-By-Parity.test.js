const swap = (arr, i, j) => {
  "use strict";
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

function paritySort(arr) {
  "use strict";
  for (let i = 0; i < arr.length; i++) {
    let evenElement = arr[i] % 2 == 0;
    let evenIndice = i % 2 == 0;
    let oddIndice = i % 2 > 0;
    let oddElement = arr[i] % 2 > 0;

    if ((evenElement && evenIndice) || (oddElement && oddIndice)) {
      continue;
    } else if (evenElement && oddIndice) {
      swap(arr, i, i + 1);
    } else if (oddElement && evenIndice) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
}
//Time Complexity = O(n);
//Space Complexity = O(n);

test.skip("when sorted, even numbers and odd numbers are at even and odd indices respectively.", () => {
  let testArray = [3, 2, 5, 6];
  let testArray2 = [4, 2, 5, 7];
  expect(paritySort(testArray)).toEqual([2, 3, 6, 5]);
  expect(paritySort(testArray2)).toEqual([4, 5, 2, 7]);
});

test.skip("array should contain only positive numbers", () => {
  let testArray = [1, 2, 3, 4];

  for (let i = 0; i < testArray.length; i++) {
    let element = testArray[i];
    expect(element).toBeGreaterThan(0);
  }
});

test.skip("half of the array elements are even", () => {
  let testArray = [1, 2, 3, 4, 5, 6];
  let count = 0;

  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] % 2 === 0) {
      count++;
    }
  }
  expect(count).toBe(testArray.length / 2);
});
