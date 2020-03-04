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
    if (typeof data === "string") {
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
    } else if (typeof data === "number") {
      let total = 0;
      total += primeNumber * total + data;
      total = total % this.table.length;
      if (total < 0) {
        total += this.table.length - 1;
      }
      return parseInt(total);
    }
  }

  put(data) {
    if (typeof data === "string") {
      const str = data.toUpperCase();
      const position = this.betterHash(str);
      this.table[position] = str;
    } else if (typeof data === "number") {
      const position = this.betterHash(data);
      this.table[position] = data;
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
      hashTable.put(someNames[i]);
    }
    console.log(hashTable.showTable());
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
