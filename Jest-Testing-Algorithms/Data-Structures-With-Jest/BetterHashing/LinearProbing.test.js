/*
PROVIDES FAST INSERTION, DELETION, AND RETRIVAL
BUT BAD FOR SEARCHING, COLLISION HANDLYING USING LINEAR PROBING,
ALSO NOT IDEAL FOR LARGE DATA
Linear probing should be chosen over separate chaining when your array for storing
data can be fairly large.

Method to use: if the size of the array can be up to half the number of elements to be
stored, you should use separate chaining; but if the size of the array can be twice the size
of the number of elements to be stored, you should use linear probing.
*/

class BetterHashTable {
  constructor() {
    this.table = new Array(137);
    this.values = [];
    this.betterHash;
    this.put;
    this.showTable;
    this.get;
    this.remove;
  }

  betterHash(key) {
    const primeNumber = 37;
    if (typeof key === "string") {
      const str = key.toUpperCase();
      let total = 0;
      for (let i = 0; i < str.length; i++) {
        total += primeNumber * total + str.charCodeAt(i);
      }
      total = total % this.table.length;
      if (total < 0) {
        total += this.table.length - 1;
      }
      return parseInt(total);
    } else if (typeof key === "number") {
      let total = 0;
      total += primeNumber * total + key;
      total = total % this.table.length;
      if (total < 0) {
        total += this.table.length - 1;
      }
      return parseInt(total);
    }
  }

  put(key, data) {
    if (typeof data === "string") {
      const str = data.toUpperCase();
      let position = this.betterHash(key);

      if (this.table[position] === undefined) {
        this.table[position] = str;
        this.values[position] = str;
      } else {
        while (this.table[position] !== undefined) {
          position++;
        }
        this.table[position] = str;
        this.values[position] = str;
      }
    } else if (typeof data === "number") {
      let position = this.betterHash(key);

      if (this.table[position] === undefined) {
        this.table[position] = data;
        this.values[position] = data;
      } else {
        while (this.table[position] !== undefined) {
          position++;
        }
        this.table[position] = data;
        this.values[position] = data;
      }
    }
  }
  remove(key, data) {
    const position = this.betterHash(key);
    for (let i = 0; i < this.table.length; i++) {
      let index = 0;
      if (this.table[position][index] === data) {
        delete this.table[position][index];
      } else {
        index++;
      }
    }
    return false;
  }

  get(key) {
    if (typeof key === "string") {
      key.toUpperCase();
      const hash = this.betterHash(key);

      for (let i = 0; i < this.table.length; i++) {
        if (this.table[hash]) {
          return this.values[hash];
        }
      }

      return undefined;
    } else {
      const hash = this.betterHash(key);

      for (let i = 0; i < this.table.length; i++) {
        if (this.table[hash]) {
          return this.values[hash];
        }
      }
      return undefined;
    }
  }

  showTable() {
    let result = "\n";

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        result += i + ":" + " " + this.table[i] + "\n";
      }
    }
    return result;
  }

  showValues() {
    let result = "\n";

    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] !== undefined) {
        result += "INDEX " + i + ":" + " " + this.values[i] + "\n";
      }
    }
    return result;
  }
}

describe("BETTER HASHING/ LINEAR PROBING", () => {
  it("BETTERHASH(), Should Compute The Hash Value", () => {
    const hashTable = new BetterHashTable();

    expect(hashTable.betterHash("David")).toBe(51);
    expect(hashTable.betterHash("ClAytOn")).toBe(89);
    expect(hashTable.betterHash("mikE")).toBe(28);
  });

  it("PUT(), Should Put A Key(Hash Value) Value Pair Into The Table And Handle Any Collisions", () => {
    const hashTable = new BetterHashTable();

    hashTable.put("David", "David");
    hashTable.put(20, "David");
    hashTable.put(75, "Clayton");
    hashTable.put(20, "Mike");
    expect(hashTable.showTable()).toMatch(
      "\n" +
        "20: DAVID" +
        "\n" +
        "21: MIKE" +
        "\n" +
        "51: DAVID" +
        "\n" +
        "75: CLAYTON" +
        "\n"
    );
  });

  it("SHOWVALUES(), Should Display The Values Arrays", () => {
    const hashTable = new BetterHashTable();

    hashTable.put("David", "David");
    hashTable.put(75, "Clayton");
    hashTable.put(20, "Mike");

    expect(hashTable.showValues()).toMatch(
      "\n" +
        "INDEX 20: MIKE" +
        "\n" +
        "INDEX 51: DAVID" +
        "\n" +
        "INDEX 75: CLAYTON" +
        "\n"
    );
  });

  it("GET(), Should Return Data Stored In A Hash Table If It Exists Else It Should Return The Array At That Key", () => {
    const hashTable = new BetterHashTable();
    hashTable.put(1, 7755);
    hashTable.put(1, "Clayton");
    hashTable.put(1, "Mike");
    hashTable.put("mike", "Mike");
    //console.log(hashTable.get("mike"));
    //console.log(hashTable.showValues());
  });

  it("SHOWTABLE(), Should Return The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.put(51, "David");
    hashTable.put(89, "Clayton");
    hashTable.put(28, "Mike");

    expect(hashTable.showTable()).toMatch(
      "\n" + "28: MIKE" + "\n" + "51: DAVID" + "\n" + "89: CLAYTON" + "\n"
    );
  });

  it("REMOVE(), Should Delete A Value From The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.put(51, "David");
    hashTable.put(89, "Clayton");
    hashTable.put(28, "Mike");
    hashTable.remove(89, "CLAYTON");

    expect(hashTable.showTable()).toMatch(
      "\n" + "28: MIKE" + "\n" + "51: DAVID" + "\n"
    );
  });
});
