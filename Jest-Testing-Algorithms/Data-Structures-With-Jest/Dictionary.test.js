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
    if (typeof key === "string") {
      this.dataStore[key.toUpperCase()] = value;
      this.length++;
    } else {
      this.dataStore[key] = value;
      this.length++;
    }
  }

  find(key) {
    if (key) {
      if (typeof key === "string") {
        return this.dataStore[key.toUpperCase()];
      } else {
        return this.dataStore[key];
      }
    }
    return false;
  }

  remove(key) {
    if (!key) {
      return;
    }
    if (typeof key === "string") {
      delete this.dataStore[key.toUpperCase()];
      this.length--;
    } else {
      delete this.dataStore[key];
      this.length--;
    }
  }

  showAll() {
    const keys = Object.keys(this.dataStore).sort();
    let result = "\n";

    keys.forEach(key => {
      let value = this.dataStore[key];
      result += key + ": " + value + "\n";
    });
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

    expect(dictionary.dataStore).toMatchObject({ FIRST: 1 });
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
    dictionary.add("Edd", 1);
    dictionary.add("Max", 2);
    dictionary.add("frank", "3");
    dictionary.remove("frank");
    dictionary.add("frank", 3);

    expect(dictionary.showAll()).toMatch(
      "\n" + "EDD: 1" + "\n" + "FRANK: 3" + "\n" + "MAX: 2" + "\n"
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
