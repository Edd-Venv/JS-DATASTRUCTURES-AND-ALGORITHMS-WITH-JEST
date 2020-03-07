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
    this.remove;
    this.findMin;
    this.findMinHeight;
    this.findMaxHeight;
  }

  insert(data) {
    const newNode = new Node(data, null, null);
    if (this.root === null) {
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
    if (this.root === null) {
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

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
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

  it("FIND(), Should Find A Node In The Tree", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(3);
    BST.insert(99);
    BST.insert(22);

    expect(BST.find(5)).toBeFalsy();
    expect(BST.find(37)).toBeTruthy();
  });

  it("FINDMIN(), Should Find The Node With The Mininmum Data", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    expect(BST.findMin()).toBe(16);
    BST.insert(10);
    expect(BST.findMin()).toBe(10);
  });

  it("FINDMINHEIGHT(), Should Find The Minimum Level", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(10);
    expect(BST.findMinHeight()).toBe(1);
  });

  it("FINDMAXHEIGHT(), Should Find The Minimum Level", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(10);
    expect(BST.findMaxHeight()).toBe(2);
  });

  it("ISPRESENT(), Should Cheak If A Node Exists In The Tree", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);

    expect(BST.isPresent(16)).toBeTruthy();
    expect(BST.isPresent(20)).toBeFalsy();
  });

  it("REMOVE(), Should Remove A Node In Tree", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.remove(16);
    expect(BST.root).toHaveProperty("left", null);
    expect(BST.find(16)).toBeFalsy();
    expect(BST.isPresent(16)).toBeFalsy();
    expect(BST.findMin()).toBe(23);
  });
});
