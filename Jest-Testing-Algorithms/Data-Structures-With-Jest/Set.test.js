class Set {
  constructor() {
    this.dataStore = [];
    this.add;
    this.remove;
    this.size;
    this.union;
    this.intersect;
    this.subset;
    this.difference;
    this.show;
  }

  size() {
    return this.dataStore.length;
  }

  show() {
    return this.dataStore;
  }

  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    }
    return false;
  }

  remove(data) {
    const position = this.dataStore.indexOf(data);
    if (position > -1) {
      this.dataStore.splice(position, 1);
    }
    return false;
  }
}

describe("", () => {
  it("ADD(), Should Put An Element In The DataStore If It Doesn't Already Exist", () => {
    const set = new Set();
    set.add(5);
    expect(set.dataStore).toEqual([5]);
    set.add(5);
    expect(set.dataStore).toEqual([5]);
    set.add(6);
    expect(set.dataStore).toEqual([5, 6]);
  });

  it("REMOVE(), Should Delete An Element In The DataStore", () => {
    const set = new Set();
    set.add(5);
    set.add(6);
    set.add(7);
    expect(set.dataStore).toEqual([5, 6, 7]);
    set.remove(6);
    expect(set.dataStore).toEqual([5, 7]);
  });
});
