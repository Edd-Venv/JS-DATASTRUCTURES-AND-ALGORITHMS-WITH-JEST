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
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      return this.head;
    }

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
    if (this.length === 1) {
      return this.head;
    }

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

  pop() {
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      return this.shift();
    }

    const last = this.getLast();
    let current = this.head;

    while (current.next !== last) {
      current = current.next;
    }
    current.next = null;
    this.length--;
    return last;
  }

  insert(data, item) {
    if (!this.find(item)) {
      return false;
    }
    const current = this.find(item);
    const newNode = new Node(data, current.next, current);
    current.next.previous = newNode;
    current.next = newNode;
    this.length++;
  }

  remove(item, nextData) {
    if (!this.head) {
      return false;
    }
    if (this.length === 1) {
      return this.shift();
    }

    if (this.getLast().data === item) {
      return this.pop();
    }

    let current = this.find(item);
    while (current.next.data !== nextData) {
      current = current.next;
    }
    current.previous.next = current.next;
    current.next.previous = current.previous;
    current.next = null;
    current.previous = null;
    this.length--;
  }

  set(item, data, nextData) {
    if (!this.find(item)) {
      return false;
    }
    if (this.length === 1) {
      const node = this.find(item);
      node.data = data;
      return true;
    }

    let node = this.find(item);
    while (node.next.data !== nextData) {
      node = node.next;
    }
    node.data = data;
    return true;
  }

  display() {
    if (!this.head) {
      return false;
    }
    if (this.length === 1) {
      console.log(this.head.data);
    }

    let current = this.head;
    let result = "\n";
    while (!(current.next == null)) {
      result += "Next Link " + current.next.data + "\n";
      result += "Current Data " + current.data + "\n";

      if (current.previous === null) {
        result += "Previous Link " + "null" + "\n" + "\n";
      } else {
        result += "Previous Link " + current.previous.data + "\n" + "\n";
      }
      current = current.next;
    }
    return result;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

describe.skip("DOUBLY LINKED-LIST", () => {
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

    expect(DLlist.getLast()).toHaveProperty("data", 5);
    expect(DLlist.getLast()).toHaveProperty("next", null);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 4);
    expect(DLlist.head.next.next.next).toHaveProperty("data", 4);
    expect(DLlist.head.next.next.next).toHaveProperty("next.data", 5);
    expect(DLlist.head.next.next.next).toHaveProperty("previous.data", 3);
  });

  it("POP() Should Delete And Return The Last Node", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);
    DLlist.push(4);

    expect(DLlist.pop()).toHaveProperty("data", 4);
    expect(DLlist.getLast()).toHaveProperty("data", 3);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 2);
    expect(DLlist.head.next.next).toHaveProperty("data", 3);
    expect(DLlist.head.next.next).toHaveProperty("next", null);
    expect(DLlist.head.next.next).toHaveProperty("previous.data", 2);
  });

  it("REMOVE() Should Remove A Node", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(2);
    DLlist.unshift(1);
    DLlist.push(5);
    DLlist.insert(4, 3);
    DLlist.remove(4, 5);
    DLlist.remove(5, null);

    expect(DLlist.getLast()).toHaveProperty("data", 3);
    expect(DLlist.getLast()).toHaveProperty("next", null);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 2);
    expect(DLlist.head.next.next).toHaveProperty("data", 3);
    expect(DLlist.head.next.next).toHaveProperty("next", null);
    expect(DLlist.head.next.next).toHaveProperty("previous.data", 2);
  });

  it("SET() Should Change A Chosen Nodes Data", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(1);
    DLlist.push(3);
    DLlist.set(3, 2, 3);

    expect(DLlist.getLast()).toHaveProperty("data", 3);
    expect(DLlist.getLast()).toHaveProperty("next", null);
    expect(DLlist.getLast()).toHaveProperty("previous.data", 2);
    expect(DLlist.head.next).toHaveProperty("data", 2);
    expect(DLlist.head.next).toHaveProperty("next.data", 3);
    expect(DLlist.head.next).toHaveProperty("previous.data", 1);
  });

  it("Display() Should Console Log The List", () => {
    const DLlist = new DoublyLinkedList();
    DLlist.unshift(3);
    DLlist.unshift(1);
    DLlist.push(3);
    DLlist.set(3, 2, 3);
    expect(DLlist.display()).toMatch(
      "\n" +
        "Next Link 2" +
        "\n" +
        "Current Data 1" +
        "\n" +
        "Previous Link null" +
        "\n" +
        "\n" +
        "Next Link 3" +
        "\n" +
        "Current Data 2" +
        "\n" +
        "Previous Link 1" +
        "\n" +
        "\n"
    );
  });
});
