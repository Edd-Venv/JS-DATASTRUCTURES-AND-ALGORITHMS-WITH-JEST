//Uses an empty Array to store list elements.

class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.length = length;
    this.clear;
    this.append;
    this.toString;
    this.end;
    this.prev;
    this.next;
    this.currPos;
    this.moveTo;
    this.getElment;
    this.contains;
  }

  clear() {
    if (this.dataStore === []) {
      return true;
    }
    this.dataStore = [];
    this.length = this.pos = this.listSize = 0;
    return true;
  }

  append(data) {
    this.dataStore[this.length++] = data;
    return true;
  }

  toString() {
    if (this.length === 0) {
      return;
    }
    return this.dataStore;
  }

  find(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.dataStore[i] === value) {
        return i;
      }
    }
    return null;
  }

  remove(value) {
    const index = this.find(value);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      this.length--;
      return true;
    }
    return false;
  }

  newIndex(index) {
    this.dataStore[index] = 0;
  }

  insert(prevElement, addedElement) {
    //You can also use splice()
    const toAppendArray = new List();
    const prevElementIdx = this.find(prevElement);

    if (prevElementIdx) {
      for (let i = prevElementIdx + 1; i < this.length; i++) {
        toAppendArray.append(this.dataStore[i]);
      }

      this.dataStore[prevElementIdx + 1] = addedElement;

      for (let j = 0; j < toAppendArray.length; j++) {
        this.newIndex(prevElementIdx + 2 + j);
        this.dataStore[prevElementIdx + 2 + j] = toAppendArray.dataStore[j];
      }

      this.length++;
      return this.dataStore;
    }
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  //TRAVSING THE LIST

  getElement(index) {
    if (index < 0 || index > this.length) {
      return;
    }
    return this.dataStore[index];
  }
  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.length - 1;
  }

  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  }

  next() {
    if (this.pos < this.length - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }
}

describe.skip("List Data Structure", () => {
  it("APPEND Should Add An Element To The DataStore", () => {
    const ListDS = new List();
    ListDS.append(5);
    ListDS.append(10);
    const length = ListDS.length - 1;
    const lastElement = ListDS.dataStore[length];

    expect(lastElement).toEqual(10);
  });

  it("CLEAR Should empty the List", () => {
    const ListDS = new List();
    ListDS.append(10);
    ListDS.clear();

    expect(ListDS.length).toBe(0);
    expect(ListDS.dataStore).toEqual([]);
    expect(ListDS.clear()).toBe(true);
  });

  it("ToSTRING Should return a string representation of the List", () => {
    const ListDS = new List();
    ListDS.append("Hey");
    ListDS.append("We on");

    const listString = ListDS.toString();
    expect(listString).toEqual([
      expect.stringMatching("Hey"),
      expect.stringMatching("We on")
    ]);
  });

  it("GetELEMENT Should Return The Value At The Current Index", () => {
    const ListDS = new List();
    ListDS.append(2);
    ListDS.append(9);

    const element = ListDS.getElement(1);
    expect(element).toBe(9);
  });

  it("FIND Should Return The Index Of The Value If Present", () => {
    const ListDS = new List();
    ListDS.append(22);
    ListDS.append(33);

    expect(ListDS.find(22)).toBe(0);
    expect(ListDS.find(33)).toBe(1);
  });

  it("REMOVE Should Delete A Value From The Array", () => {
    const ListDs = new List();
    ListDs.append(1);
    ListDs.append(2);
    ListDs.append(3);

    ListDs.remove(2);
    expect(ListDs.dataStore).toEqual([1, 3]);
  });

  it("INSERT Should Insert A Value", () => {
    const ListDS = new List();
    ListDS.append(4);
    ListDS.append(5);
    ListDS.append(6);
    ListDS.append(9);

    ListDS.insert(5, 8);
    expect(ListDS.dataStore).toEqual([4, 5, 8, 6, 9]);
  });
});
