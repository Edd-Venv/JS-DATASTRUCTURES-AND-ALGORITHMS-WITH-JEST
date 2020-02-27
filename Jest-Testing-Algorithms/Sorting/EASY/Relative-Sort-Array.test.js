function relativeSort(arr1, arr2) {
  "use strict";

  let resultArray = [];
  let count = 0;
  let hashMap = {};

  for (let i = 0; i < arr2.length; i++) {
    let secondArrayElement = arr2[i];
    count++;

    for (let j = 0; j < arr1.length; j++) {
      let firstArrayElement = arr1[j];

      if (firstArrayElement === secondArrayElement) {
        resultArray.push(firstArrayElement);
        hashMap[firstArrayElement] = true;
      }
    }
  }

  if ((count = arr2.length)) {
    for (let k = count; k < arr1.length; k++) {
      if (!hashMap[arr1[k]]) {
        resultArray.push(arr1[k]);
      }
    }
  }

  return resultArray;
}

test.skip("Sorts the relative ordering in array A to that of array B", () => {
  const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
  const arr2 = [2, 1, 4, 3, 9, 6];

  expect(relativeSort(arr1, arr2)).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
});
