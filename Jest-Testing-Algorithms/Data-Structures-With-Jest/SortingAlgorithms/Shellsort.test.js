const importedArrayTestBed = require("../ArrayTestBed.test.js");
const ArrayTestBed = importedArrayTestBed.exportedArrayTestBed;

const setGaps = arr => {
  //[701, 301, 132, 57, 23, 10, 4, 1]
  return arr;
};

function shellSort(arr) {
  const gaps = setGaps([701, 301, 132, 57, 23, 10, 4, 1]);
  for (let g = 0; g < gaps.length; g++) {
    for (let i = gaps[g]; i < arr.dataStore.length; i++) {
      let temp = arr.dataStore[i];
      let j;
      for (
        j = i;
        j >= gaps[g] && arr.dataStore[j - gaps[g]] > temp;
        j -= gaps[g]
      ) {
        arr.dataStore[j] = arr.dataStore[j - gaps[g]];
      }
      arr.dataStore[j] = temp;
    }
  }
}

describe("SHELLSORT", () => {
  it("Should Sort An Array In Accending Order", () => {
    const array = new ArrayTestBed(10);
    array.setData();
    shellSort(array);
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
