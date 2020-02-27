class Node {
  constructor(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.unshift;
    this.shift;
    this.getLast;
    this.push;
    this.clear;
    this.find;
    this.insert;
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.data != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  unshift(data) {
    if (this.head === null) {
      const newHead = new Node(data, null, null);

      this.head = newHead;
      this.length++;
    } else if (this.head !== null) {
      const newHead = new Node(data, this.head, null);

      this.head.previous = newHead;
      this.head = newHead;
      this.length++;
    }
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  shift() {
    if (!this.head) {
      return;
    }
    const oldHead = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
    return oldHead;
  }

  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }

    const last = this.getLast();
    last.next = new Node(data, null, last);
    this.length++;
  }

  insert(data, item) {
    if (!this.find(item)) {
      return false;
    }
    const current = this.find(item);
    const newNode = new Node(data, current.next, current);
    current.next = newNode;
    this.length++;
  }

  remove(item) {
    if (!this.head) {
      return false;
    }
    if (this.length === 1) {
      return this.shift();
    }
    const current = this.find(item);
    current.previous.next = current.next;
    current.next.previous = current.previous;
    current.next = null;
    current.previous = null;
    this.length--;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

describe("DOUBLY LINKED-LIST", () => {
  it("UNSHIFT() Should Add A New Node At The Start", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);

    expect(DLlist).toHaveProperty("head.next.data", 2);
    expect(DLlist).toHaveProperty("head.next.next.next", null);
    expect(DLlist).toHaveProperty("head.next.previous.data", 1);
    expect(DLlist).toHaveProperty("head.next.next.data", 3);
    expect(DLlist).toHaveProperty("head.next.next.previous.data", 2);
    expect(DLlist).toHaveProperty("head.previous", null);
    expect(DLlist).toHaveProperty("length", 3);
  });

  it("GETLAST() Should Return The Last Node", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);

    expect(DLlist.getLast()).toHaveProperty("data", 3);
    expect(DLlist.getLast()).toHaveProperty("next", null);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 2);
    expect(DLlist.getLast()).toHaveProperty("previous.previous.data", 1);
    expect(DLlist.getLast()).toHaveProperty("previous.previous.next.data", 2);
    expect(DLlist.getLast()).toHaveProperty("previous.previous.previous", null);
  });

  it("SHIFT() Should Remove The First Node", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);

    expect(DLlist.shift()).toHaveProperty("data", 1);
    expect(DLlist).toHaveProperty("head.data", 2);
    expect(DLlist).toHaveProperty("head.previous", null);
    expect(DLlist).toHaveProperty("head.next.data", 3);
  });

  it("PUSH() Should Add A Node At The End", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);
    DLlist.push(4);

    expect(DLlist.getLast()).toHaveProperty("data", 4);
    expect(DLlist.getLast()).toHaveProperty("next", null);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 3);
    expect(DLlist.head.next.next.next).toHaveProperty("data", 4);
    expect(DLlist.head.next.next.next).toHaveProperty("next", null);
    expect(DLlist.head.next.next.next).toHaveProperty("previous.data", 3);
  });

  it("INSERT() Should Add A Node After A Chosen Node", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);
    DLlist.push(5);

    DLlist.insert(4, 3);
    console.log(DLlist.getLast());

    expect(DLlist.getLast()).toHaveProperty("data", 5);
    expect(DLlist.getLast()).toHaveProperty("next", null);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 4);
    expect(DLlist.head.next.next.next).toHaveProperty("data", 4);
    expect(DLlist.head.next.next.next).toHaveProperty("next.data", 5);
    expect(DLlist.head.next.next.next).toHaveProperty("previous.data", 3);
  });
});
