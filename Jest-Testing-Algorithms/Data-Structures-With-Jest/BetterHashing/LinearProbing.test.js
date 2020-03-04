/*
PROVIDES FAST INSERTION, DELETION, AND RETRIVAL
BUT BAD FOR SEARCHING
*/

class BetterHashTable {
  constructor() {
    this.table = new Array(137);
    this.simpleHash;
    this.put;
    this.showTable;
    this.get;
    this.buildChains;
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
      const position = this.betterHash(key);
      let index = 0;
      if (this.table[position][index] === undefined) {
        this.table[position][index] = str;
        index++;
      } else {
        while (this.table[position][index] !== undefined) {
          index++;
        }
        this.table[position][index] = str;
      }
    } else if (typeof data === "number") {
      const position = this.betterHash(key);
      let index = 0;
      if (this.table[position][index] === undefined) {
        this.table[position][index] = data;
        index++;
      } else {
        while (this.table[position][index] !== undefined) {
          index++;
        }
        this.table[position][index] = data;
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

  get(key, data) {
    const position = this.betterHash(key);
    if (typeof data === "string") {
      data.toUpperCase();
      let index = 0;
      if (this.table[position][index] === data) {
        return this.table[position][index];
      }
      while (
        this.table[position][index] !== data &&
        index < this.table[position].length
      ) {
        index++;
      }
      return this.table[position];
    } else {
      let index = 0;
      if (this.table[position][index] === data) {
        return this.table[position][index];
      }
      while (
        this.table[position][index] !== data &&
        index < this.table[position].length
      ) {
        index++;
      }
      return this.table[position];
    }
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  showTable() {
    let result = "\n";

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i][0] !== undefined) {
        result += i + ":" + " " + this.table[i] + "\n";
      }
    }
    return result;
  }
}

describe.skip("BETTER HASHING/ LINEAR PROBING", () => {
  it("BETTERHASH(), Should Compute The Hash Value", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    expect(hashTable.betterHash("David")).toBe(51);
    expect(hashTable.betterHash("ClAytOn")).toBe(89);
    expect(hashTable.betterHash("mikE")).toBe(28);
  });

  it("PUT(), Should Put A Key(Hash Value) Value Pair Into The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    hashTable.put("David", "David");
    hashTable.put(75, "Clayton");
    hashTable.put(20, "Mike");

    expect(hashTable.table).toHaveProperty("51", ["DAVID"]);
    expect(hashTable.table).toHaveProperty("75", ["CLAYTON"]);
    expect(hashTable.table).toHaveProperty("20", ["MIKE"]);
  });

  it("GET(), Should Return Data Stored In A Hash Table If It Exists Else It Should Return The Array At That Key", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    hashTable.put(1, 7755);
    hashTable.put(1, "Clayton");
    hashTable.put(1, "Mike");
    hashTable.put("mike", "Mike");

    expect(hashTable.get(1, 7755)).toEqual(7755);
    expect(hashTable.get(1, 7757)).toEqual([7755, "CLAYTON", "MIKE"]);
  });

  it("SHOWTABLE(), Should Return The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    hashTable.put(51, "David");
    hashTable.put(89, "Clayton");
    hashTable.put(28, "Mike");

    expect(hashTable.showTable()).toMatch(
      "\n" + "28: MIKE" + "\n" + "51: DAVID" + "\n" + "89: CLAYTON" + "\n"
    );
  });

  it("BUILDCHAINS(), Should Handle Collions By Creating A Two Dimmensional Array For Each Key(SEPERATE CHAINING)", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    hashTable.put(0, "Danny");
    hashTable.put(0, "Jonathan");
    hashTable.put(4, "Donnie");
    hashTable.put(3, "Jennifer");

    expect(hashTable.showTable()).toMatch(
      "\n" +
        "0: DANNY,JONATHAN" +
        "\n" +
        "3: JENNIFER" +
        "\n" +
        "4: DONNIE" +
        "\n"
    );
  });
  it("REMOVE(), Should Delete A Value From The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    hashTable.put(51, "David");
    hashTable.put(89, "Clayton");
    hashTable.put(28, "Mike");
    hashTable.remove(89, "CLAYTON");

    expect(hashTable.showTable()).toMatch(
      "\n" + "28: MIKE" + "\n" + "51: DAVID" + "\n"
    );
  });
});
