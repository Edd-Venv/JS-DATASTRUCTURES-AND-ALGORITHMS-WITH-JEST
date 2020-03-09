const importedArrayTestBed = require("../ArrayTestBed.test.js");
const ArrayTestBed = importedArrayTestBed.exportedArrayTestBed;

function selectionSort(arr) {
  let swapIdx;
  for (let i = 0; i < arr.dataStore.length; i++) {
    swapIdx = i;
    for (let j = i + 1; j < arr.dataStore.length; j++) {
      if (arr.dataStore[j] < arr.dataStore[swapIdx]) {
        swapIdx = j;
      }
    }
    arr.swap(arr.dataStore, i, swapIdx);
  }
  return arr.dataStore;
}

describe.skip("SELECTIONSORT", () => {
  it("Should Sort An Array In Accending Order", () => {
    const array = new ArrayTestBed(5);
    array.setData();
    selectionSort(array);
    expect(array.dataStore[0]).toBeLessThanOrEqual(array.dataStore[1]);
    expect(array.dataStore[0]).toBeLessThanOrEqual(array.dataStore[3]);
  });
});
describe.skip("ARRAYTESTBED", () => {
  it("ArrayTestBed Has Been Imported Successfully", () => {
    const array = new ArrayTestBed();
    expect(array).toMatchObject({
      dataStore: [],
      pos: 0,
      numElements: undefined
    });
  });
});
