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
    this.inOrder;
    this.putStr;
    this.findMax;
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

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      const result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

describe("BINARY-SEARCH-TREE", () => {
  it("INSERT(), Should Add A New Node, Either Left Or Right Of The BSTree, Depending On The Value Of The Data", () => {
    const BST = new BinarySearchTree();
    BST.insert(2);
    expect(BST.root).toMatchObject({ data: 2, left: null, right: null });
  });

  it("INORDER(), Should Traversal Visits All The Nodes Of A BST", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(3);
    BST.insert(99);
    BST.insert(22);
    expect(BST.inOrder(BST.root)).toEqual([3, 16, 22, 23, 37, 45, 99]);
  });

  it("FINDMAX(), Should Find The Max Data On The Right Child Of The Root", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(3);
    BST.insert(99);
    BST.insert(22);
    expect(BST.findMax()).toEqual(99);
    BST.insert(105);
    expect(BST.findMax()).toEqual(105);
  });
});
