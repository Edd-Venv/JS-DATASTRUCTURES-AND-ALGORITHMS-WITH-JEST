const importedArrayTestBed = require("../ArrayTestBed.test.js");
const ArrayTestBed = importedArrayTestBed.exportedArrayTestBed;

function insertionSort(arr) {
  let temp, j;
  for (let i = 1; i < arr.dataStore.length; i++) {
    temp = arr.dataStore[i];
    j = i;
    while (j > 0 && arr.dataStore[j - 1] > temp) {
      arr.dataStore[j] = arr.dataStore[j - 1];
      j--;
    }
    arr.dataStore[j] = temp;
  }
}

describe("INSERTIONSORT", () => {
  it("Should Sort An Array In Accending Order", () => {
    const array = new ArrayTestBed(10000);
    array.setData();
    insertionSort(array);
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
