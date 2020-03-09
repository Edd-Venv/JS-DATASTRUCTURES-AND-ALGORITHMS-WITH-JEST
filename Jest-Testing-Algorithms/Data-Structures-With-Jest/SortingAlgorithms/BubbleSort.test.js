const importedArrayTestBed = require("../ArrayTestBed.test.js");
const ArrayTestBed = importedArrayTestBed.exportedArrayTestBed;

function bubbleSort(arr) {
  for (let i = 0; i < arr.numElements; i++) {
    for (let j = 0; j < arr.numElements; j++) {
      if (arr.dataStore[i] < arr.dataStore[j]) {
        arr.swap(arr.dataStore, i, j);
      }
    }
  }
}

describe.skip("BUBBLESORT", () => {
  it("Should Sort An Array In Accending Order", () => {
    const array = new ArrayTestBed(5);
    array.setData();
    bubbleSort(array);
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
