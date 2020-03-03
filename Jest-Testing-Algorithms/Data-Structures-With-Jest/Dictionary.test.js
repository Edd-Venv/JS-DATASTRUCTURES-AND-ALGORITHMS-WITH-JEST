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
    return true;
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
    this.length = 0;
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

  it("REMOVE(), Should Remove A Key Value Pair", () => {
    const dictionary2 = new Dictionary();

    expect(dictionary2.add("first", 1)).toBeTruthy();
    expect(dictionary2.dataStore).toMatchObject({ FIRST: 1 });
    dictionary2.add("second", 2);
    expect(dictionary2.dataStore).toMatchObject({ FIRST: 1, SECOND: 2 });
    dictionary2.remove("second");
    expect(dictionary2.dataStore).toMatchObject({ FIRST: 1 });
    dictionary2.remove("first");
    expect(dictionary2.dataStore).toEqual(new Array());
  });

  it("CLEAR(), Should Clear The Dictionary", () => {
    const dictionary = new Dictionary();
    dictionary.add("first", 1);
    dictionary.add("Second", 2);
    dictionary.add("Third", "3");
    dictionary.clear();
    expect(dictionary.dataStore).toEqual(new Array());
  });
});

//                                    IMPLEMENTATION(WORD OCCURRENCES)

function ocurrences(str) {
  const result = new Dictionary();
  let word = "";

  for (let j = 0; j < str.length; j++) {
    if (str[j] !== " ") {
      word += str[j].toUpperCase();
    } else if (str[j] === " ") {
      if (result.find(word)) {
        result.dataStore[word]++;
        word = "";
      } else if (!result.find(word)) {
        result.add(word, 1);
        word = "";
      }
    }
  }

  if (result.find(word)) {
    result.dataStore[word]++;
    word = "";
  } else if (!result.find(word)) {
    result.add(word, 1);
    word = "";
  }
  return result.showAll();
}

describe("DICTIONARY IMPLEMENTATION", () => {
  it("OCCURRENCES(), Should Return A Sorted Object With Each Word And Its Number Of Occurrences", () => {
    const str = "the brown fox jumped over the blue fox";
    expect(ocurrences(str)).toMatch(
      "\n" +
        "BLUE: 1" +
        "\n" +
        "BROWN: 1" +
        "\n" +
        "FOX: 2" +
        "\n" +
        "JUMPED: 1" +
        "\n" +
        "OVER: 1" +
        "\n" +
        "THE: 2" +
        "\n"
    );
  });
});
