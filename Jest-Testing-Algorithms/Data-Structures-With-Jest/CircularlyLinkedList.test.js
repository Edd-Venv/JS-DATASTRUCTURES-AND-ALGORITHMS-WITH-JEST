class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class CircularlyLinkedList {
  constructor() {
    this.head = null;
    this.head.next = this.head;
    this.length = 0;
  }
}
