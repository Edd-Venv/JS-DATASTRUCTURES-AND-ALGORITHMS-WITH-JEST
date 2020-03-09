class TestBedArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert;
    this.toString;
    this.clear;
    this.setData;
    this.swap;
    this.bubbleSort;
    for (let i = 0; i < numElements; i++) {
      this.dataStore[i] = i;
    }
  }

  setData() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  }

  clear() {
    for (let i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
    }
  }

  insert(element) {
    this.dataStore[this.pos++] = element;
  }

  toString() {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
        retstr += "\n";
      }
    }
    return retstr;
  }

  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

describe.skip("ARRAY-TESTBED", () => {
  it("Test-Bed-Array, Should Have Some Of The Normal Array Operations, Insertion, Displaying etc", () => {
    const testBed = new TestBedArray(5);
    testBed.setData();
    testBed.clear();
    expect(testBed.dataStore).toEqual([0, 0, 0, 0, 0]);
    testBed.setData();
  });
});

exports.exportedArrayTestBed = TestBedArray;
