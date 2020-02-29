class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class CircularlyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.unshift;
    this.getLast;
    this.find;
    this.push;
  }

  find(item) {
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getLast() {
    if (this.length === 1) {
      return this.head;
    }

    let currentNode = this.head;
    let counter = 0;
    while (counter <= this.length) {
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  unshift(data) {
    if (this.head === null) {
      const newHead = new Node(data, this.head);

      this.head = newHead;
      this.head.next = this.head;
      this.length++;
    } else if (this.head !== null) {
      const newHead = new Node(data, this.head);
      const oldHead = this.getLast();

      this.head = newHead;
      this.length++;
      oldHead.next = this.head;
    }
  }

  shift() {
    if (!this.head) {
      return;
    }

    const oldHead = this.head;
    this.head = this.head.next;

    const last = this.getLast();
    last.next = this.head;
    this.length--;
    return oldHead;
  }

  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }

    const last = this.getLast();
    last.next = new Node(data, this.head);
    this.length++;
  }
}

describe("CIRCULARLY-LINKED-LIST", () => {
  it("GETLAST() Should Return the Last Node", () => {
    const CLlist = new CircularlyLinkedList();
    CLlist.unshift(1);
    CLlist.unshift(2);
    expect(CLlist.getLast()).toHaveProperty("data", 1);
  });

  it("UNSHIFT() Should A New Node At The Start Of The List", () => {
    const CLlist = new CircularlyLinkedList();
    CLlist.unshift(1);
    CLlist.unshift(2);
    CLlist.unshift(3);

    expect(CLlist.head.next).toHaveProperty("data", 2);
    expect(CLlist.head.next.next).toHaveProperty("data", 1);
    expect(CLlist.head.next.next.next).toHaveProperty("data", 3);
  });

  it("SHIFT() Should Remove The First Node And Retrun It", () => {
    const CLlist = new CircularlyLinkedList();
    CLlist.unshift(1);
    CLlist.unshift(2);
    CLlist.unshift(3);

    expect(CLlist.shift()).toHaveProperty("data", 3);
    expect(CLlist.head).toHaveProperty("data", 2);
    expect(CLlist.head.next).toHaveProperty("data", 1);
    expect(CLlist.head.next.next).toHaveProperty("data", 2);
  });

  it("PUSH() Should Add A Node At The End Of The List", () => {
    const CLlist = new CircularlyLinkedList();
    CLlist.unshift(2);
    CLlist.unshift(1);
    CLlist.push(3);

    expect(CLlist.head).toHaveProperty("data", 1);
    expect(CLlist.head.next).toHaveProperty("data", 2);
    expect(CLlist.head.next.next).toHaveProperty("data", 3);
    expect(CLlist.head.next.next.next).toHaveProperty("data", 1);
  });
});
