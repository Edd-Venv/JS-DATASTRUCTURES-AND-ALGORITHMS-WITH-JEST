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
    for (let i = 0; i < numElements; i++) {
      this.dataStore[i] = i;
    }
  }
}

describe("ARRAY-TESTBED", () => {
  it("Test-Bed-Array, Should Have Some Of The Normal Array Operations, Insertion, Displaying etc", () => {
    const testBed = new TestBedArray(5);
    console.log(testBed);
  });
});
