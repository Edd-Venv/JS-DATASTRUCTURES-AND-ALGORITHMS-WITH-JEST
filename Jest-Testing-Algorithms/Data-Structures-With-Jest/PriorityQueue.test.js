const importedQueue = require("./Queue.test.js");
const Queue = importedQueue.exportedQueue;

class priorityQueue {
  constructor() {
    this.dataStore = [];
    this.length;
    this.pEnqueue;
    this.pDequeue;
  }
  length() {
    return this.dataStore.length;
  }

  joinNameAndCode(name, code) {
    if (name && code) {
      const jointNameAndCode = `${code} ${name}`;
      return jointNameAndCode;
    }
  }

  selectPatient(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      let patient = parseInt(arr[i][0]);
      let index = i;

      for (let j = i + 1; j < length; j++) {
        let nextPatient = parseInt(arr[j][0]);

        if (nextPatient < patient && nextPatient > 0) {
          patient = nextPatient;
          index = j;
        }
      }
      return index;
    }
    return false;
  }

  splice(arr, index) {
    const length = this.dataStore.length;
    const spliceQueue = new Queue();

    for (let i = 0; i < length; i++) {
      if (this.dataStore[i] !== this.dataStore[index]) {
        spliceQueue.enqueue(this.dataStore[i]);
      }
    }
    this.dataStore = spliceQueue.dataStore;

    return arr[index];
  }

  pEnqueue(name, code) {
    return this.dataStore.push(this.joinNameAndCode(name, code));
  }
  pDequeue() {
    return this.splice(this.dataStore, this.selectPatient(this.dataStore));
  }
}

describe.skip("PRIORITY QUEUE", () => {
  it("Should Select The Right Patient", () => {
    const arr = ["3 luke", "1 Mack", "5 John", "4 Matthew"];
    const q = new priorityQueue();
    expect(q.selectPatient(arr)).toBe(1);
  });

  it("SPLICE Should Remove Element At Desired Index", () => {
    const q = new priorityQueue();
    const arr = ["3 luke", "1 Mack", "5 John", "4 Matthew"];
    q.dataStore = arr;
    q.splice(q.dataStore, q.selectPatient(q.dataStore));
    q.splice(q.dataStore, q.selectPatient(q.dataStore));
    expect(q.dataStore).toEqual(["5 John", "4 Matthew"]);
  });

  it("Should Remove Elements Based On A Priority Constraint", () => {
    const pQueue = new priorityQueue();
    pQueue.pEnqueue("luke", 3);
    pQueue.pEnqueue("Mack", 4);
    pQueue.pEnqueue("John", 1);
    pQueue.pEnqueue("Mathew", 5);
    pQueue.pDequeue();
    pQueue.pDequeue();
    expect(pQueue.dataStore).toEqual(["4 Mack", "5 Mathew"]);
  });

  it("Should Use A Queue(FIFO) When Paitents Have The Same Code", () => {
    const pQueue = new priorityQueue();
    pQueue.pEnqueue("luke", 3);
    pQueue.pEnqueue("Mack", 3);
    pQueue.pEnqueue("John", 3);
    pQueue.pDequeue();
    pQueue.pDequeue();
    expect(pQueue.dataStore).toEqual(["3 John"]);
  });
});

describe.skip("REQUIRE", () => {
  it("Should Import The Queue Class", () => {
    const test = new Queue();
    expect(test).toEqual({ dataStore: [] });
  });
});
