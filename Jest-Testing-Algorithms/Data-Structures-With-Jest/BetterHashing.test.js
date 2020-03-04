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
      this.table[position] = str;
    } else if (typeof data === "number") {
      const position = this.betterHash(key);
      this.table[position] = data;
    }
  }

  get(key) {
    return this.table[this.betterHash(key)];
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  showTable() {
    let result = "\n";
    if (this.table[0] === undefined) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
          result += i + ":" + " " + this.table[i] + "\n";
        }
      }
      return result;
    } else if (this.table[0] !== undefined) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i][0] !== undefined) {
          result += i + ":" + " " + this.table[i] + "\n";
        }
      }
      return result;
    }
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
    hashTable.put("David", "David");
    hashTable.put(75, "Clayton");
    hashTable.put(20, "Mike");

    expect(hashTable.table).toHaveProperty("51", "DAVID");
    expect(hashTable.table).toHaveProperty("75", "CLAYTON");
    expect(hashTable.table).toHaveProperty("20", "MIKE");
  });

  it("GET(), Should Retrieve Data Stored In A Hash Table", () => {
    const hashTable = new BetterHashTable();
    hashTable.put(2, "David");
    hashTable.put(1, "Clayton");
    hashTable.put("mike", "Mike");
    expect(hashTable.get(1)).toEqual("CLAYTON");
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

  it("BUILDCHAINS(), Should Handle Collions By Creating A Two Dimmensional Array For Each Key(SEPERATE CHAINING)", () => {
    const hashTable = new BetterHashTable();
    hashTable.buildChains();
    hashTable.put(0, "Danny");
    hashTable.put(1, "Jonathan");
    hashTable.put(4, "Donnie");
    hashTable.put(3, "Jennifer");

    console.log(hashTable.showTable());
  });

  it("SHOWTABLE(), Using Console.log()", () => {
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
      "Jonathan",
      444
    ];

    for (let i = 0; i < someNames.length; ++i) {
      hashTable.put(i, someNames[i]);
    }
    //console.log(hashTable.showTable());
  });
});

//                                SHOWING THAT BETTERHASH IS A BETTER HASHING FUNCTION
//                              HASHING INTEGER KEYS

/*
The getRandomInt() function allows us to specify a maximum and minimum random
number, for a set of student grades.
*/
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
The getStuData() function generates student data. The inner loop generates the student
ID number, and right after the inner loop finishes, a random grade is generated
and concatenated to the student ID.

The main program will separate the ID from the
grade. The hash function will total the individual digits in the student ID to compute a
hash value using the betterHash() function.
*/
function generateStudentData(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = "";
    for (let j = 1; j <= 9; j++) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);
    arr[i] = num;
  }
}

const numOfStudents = 10;
const arrSize = 97;
const idLength = 9;
const students = new Array(numOfStudents);
generateStudentData(students);
//console.log("Student data: \n");
for (let i = 0; i < students.length; i++) {
  //console.log(students[i].substring(0, 8) + " " + students[i].substring(9));
}
//console.log("\n\nData distribution: \n");
var hTable = new BetterHashTable();
for (let i = 0; i < students.length; i++) {
  hTable.put(students[i]);
}
//console.log(hTable.showTable());
