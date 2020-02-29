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
  }

  unshift(data) {
    if (this.head === null) {
      const newHead = new Node(data, this.head);
      this.head = newHead;
      this.head.next = this.head;
      //newHead.next = this.head;
      this.length++;
    } else if (this.head !== null) {
      const newHead = new Node(data, this.head);

      //this.head.next = newHead;
      this.head = newHead;
      this.length++;
    }
  }
}

describe("CIRCULARLY-LINKED-LIST", () => {
  it("UNSHIFT()", () => {
    const CLlist = new CircularlyLinkedList();
    CLlist.unshift(1);
    CLlist.unshift(2);
    CLlist.unshift(3);
    console.log(CLlist.head.next.next.next.next.data);
    expect(CLlist.head.next.next).toHaveProperty("data", 1);
    expect(CLlist.head.next.next.next).toHaveProperty("data", 3);
  });
});
