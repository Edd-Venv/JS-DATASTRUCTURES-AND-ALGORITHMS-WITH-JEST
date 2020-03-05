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

  intersect(set) {
    const tempSet = new Set();

    for (let i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet.dataStore;
  }

  subset(set) {
    let boolean = true;
    if (this.size() > set.size()) {
      return false;
    }

    this.dataStore.forEach(element => {
      if (!set.contains(element)) {
        boolean = false;
      }
    });
    return boolean;
  }

  difference(set) {
    const tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet.dataStore;
  }
}

describe.skip("SET", () => {
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

  it("INTERSECT(), Should Return A New Set That Contains The Same Elements From Two Sets", () => {
    const currentSet = new Set();
    const newSet = new Set();
    currentSet.add(1);
    currentSet.add(2);
    currentSet.add(3);
    newSet.add(3);
    newSet.add(4);
    newSet.add(1);
    expect(currentSet.intersect(newSet)).toEqual([1, 3]);

    const intersectSet = new Set();
    intersectSet.dataStore = currentSet.intersect(newSet);
    expect(intersectSet.show()).toEqual([1, 3]);
  });

  it("INTERSECT(), Should Return A New Set That Contains The Same Elements From Two Sets", () => {
    const currentSet = new Set();
    const newSet = new Set();
    currentSet.add(1);
    currentSet.add(2);
    currentSet.add(3);
    newSet.add(3);
    newSet.add(4);
    newSet.add(1);
    expect(currentSet.intersect(newSet)).toEqual([1, 3]);

    const intersectSet = new Set();
    intersectSet.dataStore = currentSet.intersect(newSet);
    expect(intersectSet.show()).toEqual([1, 3]);
  });

  it("SUBSET(), Should Return True If Set Is Contained In DataStore", () => {
    const currentSet = new Set();
    const newSet = new Set();
    currentSet.add(1);
    currentSet.add(2);
    currentSet.add(3);
    newSet.add(3);
    newSet.add(4);
    newSet.add(1);
    expect(currentSet.subset(newSet)).toBeFalsy();

    newSet.remove(4);
    newSet.add(2);
    expect(currentSet.subset(newSet)).toBeTruthy();
  });

  it("DIFFERNECE(), Should Return A Set Containing Elements Of The DataStore(Frist/Current Set) That Are Not In the Second Set", () => {
    const currentSet = new Set();
    const newSet = new Set();
    currentSet.add(1);
    currentSet.add(2);
    currentSet.add(3);
    newSet.add(3);
    newSet.add(4);
    newSet.add(1);
    expect(currentSet.difference(newSet)).toEqual([2]);
  });
});
