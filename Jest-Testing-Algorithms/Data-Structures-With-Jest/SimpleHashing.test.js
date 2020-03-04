/*
PROVIDES FAST INSERTION, DELETION, AND RETRIVAL
BUT  BAD FOR SEARCHING
*/

class SimpleHashTable {
  constructor() {
    this.table = new Array(137);
    this.simpleHash;
    this.put;
    this.showTable;
  }

  simpleHash(data) {
    const str = data.toUpperCase();
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    }
    return total % this.table.length;
  }

  put(data) {
    const str = data.toUpperCase();
    const position = this.simpleHash(str);
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

describe.skip("SIMPLE HASHING", () => {
  it("SIMPLEHASH(), Should Compute The Hash Value", () => {
    const hashTable = new SimpleHashTable();
    expect(hashTable.simpleHash("David")).toBe(86);
    expect(hashTable.simpleHash("ClAytOn")).toBe(127);
    expect(hashTable.simpleHash("MIkE")).toBe(20);
  });

  it("PUT(), Should Put A Key(Hash Value) Value Pair Into The Table", () => {
    const hashTable = new SimpleHashTable();
    hashTable.put("David");
    hashTable.put("Clayton");
    hashTable.put("Mike");
    expect(hashTable.table).toHaveProperty("86", "DAVID");
    expect(hashTable.table).toHaveProperty("127", "CLAYTON");
    expect(hashTable.table).toHaveProperty("20", "MIKE");
  });

  it("SHOWTABLE(), Should Return The Table", () => {
    const hashTable = new SimpleHashTable();
    hashTable.put("David");
    hashTable.put("Clayton");
    hashTable.put("Mike");
    expect(hashTable.showTable()).toMatch(
      "\n" + "20: MIKE" + "\n" + "86: DAVID" + "\n" + "127: CLAYTON" + "\n"
    );
  });
});

//                                   IMPLEMENTATION 1

function table(arr) {
  const hashTable = new SimpleHashTable();
  for (let i = 0; i < arr.length; i++) {
    hashTable.put(arr[i]);
  }
  return hashTable.showTable();
}

describe.skip("TABLE", () => {
  it("table(), Should Create And Display The Table Contents From An Array", () => {
    const arr = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia"];

    expect(table(arr)).toMatch(
      "\n" +
        "34: DONNIE" +
        "\n" +
        "45: JENNIFER" +
        "\n" +
        "86: DAVID" +
        "\n" +
        "117: CYNTHIA" +
        "\n" +
        "127: RAYMOND" +
        "\n"
    );
  });
});
