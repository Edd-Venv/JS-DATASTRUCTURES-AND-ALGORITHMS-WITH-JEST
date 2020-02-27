class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.find;
    this.insert;
    this.remove;
    this.display;
    this.unshift;
    this.clear;
    this.getLast;
    this.shift;
    this.pop;
    this.push;
    this.display;
  }

  unshift(data) {
    const newHead = new Node(data, this.head);
    this.length++;
    this.head = newHead;
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
    this.length--;
    return oldHead;
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

  clear() {
    this.head = null;
    this.length = 0;
  }

  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }

    const last = this.getLast();
    last.next = new Node(data, null);
    this.length++;
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.data != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(item, data) {
    if (!this.find(item)) {
      return false;
    }

    const node = this.find(item);
    node.data = data;
    return true;
  }

  insert(data, item) {
    if (!this.find(item)) {
      return false;
    }
    const current = this.find(item);
    const newNode = new Node(data, current.next);
    current.next = newNode;
    this.length++;
  }

  remove(item, prevItem) {
    if (!this.head) {
      return false;
    }
    if (this.length === 1) {
      return this.shift();
    }
    const previous = this.find(prevItem);
    const current = this.find(item);
    previous.next = current.next;
    current.next = null;
    this.length--;
  }

  display() {
    if (!this.head) {
      return false;
    }
    let currentNode = this.head;
    while (!(current.next == null)) {
      console.log(currNode.next.element);
      currentNode = currentNode.next;
    }
  }
}

describe.skip("SINGLY LINKED LIST", () => {
  it("UNSHIFT Should Add A Node At The begining Of The LinkedList", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);

    expect(llist).toHaveProperty("head.next.data", 1);
    expect(llist).toHaveProperty("length", 2);
  });

  it("FIND Should Search A Node Return It", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);

    expect(llist.find(1)).toMatchObject({ data: 1, next: null });
    expect(llist.find(2)).toMatchObject({
      data: 2,
      next: { data: 1, next: null }
    });
    expect(llist).toHaveProperty("length", 2);
  });

  it("INSERT Should Insert A New Node", () => {
    const llist = new LinkedList();
    llist.unshift(3);
    llist.unshift(1);
    llist.insert(2, 1);

    expect(llist).toHaveProperty("head.next.next.data", 3);
    expect(llist).toHaveProperty("length", 3);
  });

  it("REMOVE Should A Node ", () => {
    const llist = new LinkedList();
    llist.unshift(4);
    llist.unshift(2);
    llist.insert(3, 2);
    llist.unshift(1);
    llist.remove(3, 2);

    expect(llist).toHaveProperty("head.next.next.data", 4);
    expect(llist).toHaveProperty("length", 3);
  });

  it("GETLAST Should Return The Last Node ", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);
    llist.unshift(3);

    expect(llist.getLast()).toMatchObject({ data: 1, next: null });
  });

  it("SHIFT Should Remove The First Node ", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);
    llist.unshift(3);

    expect(llist.shift()).toMatchObject({
      data: 3,
      next: { data: 2, next: { data: 1, next: null } }
    });
    expect(llist).toHaveProperty("head.data", 2);
    expect(llist).toHaveProperty("length", 2);
  });

  it("POP Should Remove The Last Node ", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);
    llist.unshift(3);

    expect(llist.pop()).toMatchObject({ data: 1, next: null });
    expect(llist).toHaveProperty("head.next.next", null);
    expect(llist).toHaveProperty("length", 2);
  });

  it("PUSH Should Add A Node At The End", () => {
    const llist = new LinkedList();
    llist.unshift(2);
    llist.unshift(1);
    llist.push(3);

    expect(llist).toHaveProperty("head.next.next.data", 3);
    expect(llist).toHaveProperty("length", 3);
  });

  it("SET Should Put A New Element In A Chosen Node", () => {
    const llist = new LinkedList();
    llist.unshift(1);
    llist.unshift(2);
    llist.unshift(3);
    llist.set(2, 3);

    expect(llist).toHaveProperty("head.next.data", 3);
    expect(llist).toHaveProperty("length", 3);
  });
});
