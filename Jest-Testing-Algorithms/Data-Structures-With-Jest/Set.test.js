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

  contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true;
    }
    return false;
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

  union(set) {
    const tempSet = new Set();

    for (let j = 0; j < this.dataStore.length; j++) {
      tempSet.add(this.dataStore[j]);
    }

    for (let i = 0; i < set.dataStore.length; i++) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i]);
      }
    }
    return tempSet.dataStore;
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

  it("UNION(), Should Join The Current Set With A New Set With No Repeating Elements", () => {
    const currentSet = new Set();
    const newSet = new Set();
    currentSet.add(1);
    currentSet.add(2);
    currentSet.add(3);
    newSet.add(3);
    newSet.add(4);
    newSet.add(1);
    expect(currentSet.union(newSet)).toEqual([1, 2, 3, 4]);

    const unionedSet = new Set();
    unionedSet.dataStore = currentSet.union(newSet);
    expect(unionedSet.show()).toEqual([1, 2, 3, 4]);
  });
});
