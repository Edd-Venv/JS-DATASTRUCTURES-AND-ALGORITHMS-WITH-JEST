/*
GOOD FOR SEARCHING(UNLIKE LLIST), INSERTION AND DELETION(UNLIKE AN ARRAY)  
*/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show;
  }
  show() {
    return this.data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.insert;
  }

  insert(data) {
    const newNode = new Node(data, null, null);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = newNode;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  }
}

describe("BINARY-SEARCH-TREE", () => {
  it("INSERT(), Should Add A New Node, Either Left Or Right Of The BSTree, Depending On The Value Of The Data", () => {
    const BST = new BinarySearchTree();
    BST.insert(2);
    expect(BST.root).toMatchObject({ data: 2, left: null, right: null });
  });
});
