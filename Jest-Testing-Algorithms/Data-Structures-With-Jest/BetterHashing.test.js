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
  }

  betterHash(data) {
    const primeNumber = 37;
    const str = data.toUpperCase();
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += primeNumber * total + str.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }

  put(data) {
    const str = data.toUpperCase();
    const position = this.betterHash(str);
    this.table[position] = str;
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
}

describe("BETTER HASHING", () => {
  it("BETTERHASH(), Should Compute The Hash Value", () => {
    const hashTable = new BetterHashTable();
    expect(hashTable.betterHash("David")).toBe(51);
    expect(hashTable.betterHash("ClAytOn")).toBe(89);
    expect(hashTable.betterHash("mikE")).toBe(28);
  });

  it("PUT(), Should Put A Key(Hash Value) Value Pair Into The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.put("David");
    hashTable.put("Clayton");
    hashTable.put("Mike");

    expect(hashTable.table).toHaveProperty("51", "DAVID");
    expect(hashTable.table).toHaveProperty("89", "CLAYTON");
    expect(hashTable.table).toHaveProperty("28", "MIKE");
  });

  it("SHOWTABLE(), Should Return The Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.put("David");
    hashTable.put("Clayton");
    hashTable.put("Mike");

    expect(hashTable.showTable()).toMatch(
      "\n" + "28: MIKE" + "\n" + "51: DAVID" + "\n" + "89: CLAYTON" + "\n"
    );
  });

  it("SHOWTABLE()", () => {
    const hashTable = new BetterHashTable();
    const someNames = [
      "David",
      "Jennifer",
      "Donnie",
      "Raymond",
      "Cynthia",
      "Mike",
      "Clayton",
      "Danny",
      "Jonathan"
    ];

    for (let i = 0; i < someNames.length; ++i) {
      hashTable.put(someNames[i]);
    }
    //console.log(hashTable.showTable());
  });
});
