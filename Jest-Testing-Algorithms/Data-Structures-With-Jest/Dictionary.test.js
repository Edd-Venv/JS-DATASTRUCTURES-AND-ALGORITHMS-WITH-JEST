class Dictionary {
  constructor() {
    this.dataStore = new Array();
    this.add;
    this.find;
    this.remove;
    this.count;
    this.length = 0;
  }

  add(key, value) {
    this.dataStore[key] = value;
    this.length++;
  }

  find(key) {
    if (key) {
      return this.dataStore[key];
    }
    return false;
  }

  remove(key) {
    if (!key) {
      return;
    }
    delete this.dataStore[key];
    this.length--;
  }

  showAll() {
    let result = "\n";

    const key = Object.keys(this.dataStore);
    for (let i = 0; i < this.length; i++) {
      let value = this.dataStore[key[i]];
      result += key[i] + ": " + value + "\n";
    }
    return result;
  }

  count() {
    return this.length;
  }

  clear() {
    this.dataStore = new Array();
    return this.dataStore;
  }
}

describe("DICTIONARY", () => {
  it("ADD(), Should Add A Key Value Pair", () => {
    const dictionary = new Dictionary();
    dictionary.add("First", 1);
    dictionary.add("Second", 2);

    expect(dictionary.dataStore).toMatchObject({ First: 1 });
  });

  it("FIND(), Should Search Using A Value And Return A Value ", () => {
    const dictionary = new Dictionary();
    dictionary.add("First", 1);
    dictionary.add("Second", 2);
    dictionary.add("Third", "3");
    expect(dictionary.find("Third")).toBe("3");
  });

  it("showAll(), Should Display The Key Value Pairs", () => {
    const dictionary = new Dictionary();
    dictionary.add("first", 1);
    dictionary.add("Second", 2);
    dictionary.add("Third", "3");
    dictionary.remove("Third");
    dictionary.add("Third", 3);
    expect(dictionary.showAll()).toMatch(
      "\n" + "first: 1" + "\n" + "Second: 2" + "\n" + "Third: 3" + "\n"
    );
  });

  it("COUNT(), Should Return The Number Of Entries In The Dictionary", () => {
    const dictionary = new Dictionary();
    dictionary.add("first", 1);
    dictionary.add("Second", 2);
    dictionary.add("Third", "3");

    expect(dictionary.count()).toBe(3);
  });

  it("CLEAR(), Should Clear The Dictionary", () => {
    const dictionary = new Dictionary();
    dictionary.add("first", 1);
    dictionary.add("Second", 2);
    dictionary.add("Third", "3");
    dictionary.clear();
    expect(dictionary.dataStore).toEqual(new Array());
  });

  it("REMOVE(), Should Delete A Key Value Pair From The Dictionary", () => {
    const dictionary = new Dictionary();
    dictionary.add("first", 1);
    dictionary.add("Second", 2);
    dictionary.add("Third", "3");
    dictionary.remove("Third");
    //console.log(dictionary);
  });
});
