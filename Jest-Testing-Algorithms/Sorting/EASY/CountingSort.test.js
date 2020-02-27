const max = arr => {
  "use strict";
  let maxValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

function countingSort(arr) {
  "use strict";
  let result = [];
  let hashMap = {};
  const range = max(arr);

  for (let i = 0; i <= range; i++) {
    result.push(0);
    hashMap[arr[i]] = arr[i];
  }

  for (let j = 0; j < result.length; j++) {
    for (let k = 0; k <= result.length; k++) {
      if (hashMap[j] == arr[k]) {
        result[j]++;
      }
    }
  }
  return result;
}

describe.skip("Alternative Sort(Counting Sort)", () => {
  it("should return a list of occurrences", () => {
    const arr = [1, 1, 3, 2, 1];
    expect(countingSort(arr)).toEqual([0, 3, 1, 1]);
  });
});
