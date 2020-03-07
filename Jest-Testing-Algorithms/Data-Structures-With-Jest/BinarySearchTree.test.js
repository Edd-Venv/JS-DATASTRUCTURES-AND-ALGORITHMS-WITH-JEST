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
    this.findMax;
    this.findMinHeight;
    this.findMaxHeight;
    this.preOrder;
    this.postOrder;
    this.levelOrder;
  }

  insert(data) {
    const newNode = new Node(data, null, null);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      let parent;
      //Next Check Should Be Removed IG You Want To Use BST For Number Of Occurrences And A Counter Added To The Node Object
      if (data === current.data) {
        return null;
      }
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

  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
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
    BST.insert(2);
    expect(BST.root).toMatchObject({ data: 2, left: null, right: null });
    expect(BST.insert(2)).toBeNull();
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

  it("FINDMINHEIGHT(), Should Find The Distance(Level) From The Root Node To The First Leaf Node WithOut Two Children", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(10);
    BST.insert(47);
    expect(BST.findMinHeight()).toBe(1);
  });

  it("FINDMAXHEIGHT(), Should The Distance From The Root Node To The Most Bottom Node", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(10);
    BST.insert(43);
    expect(BST.findMaxHeight()).toBe(3);
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

  it("INORDER(), Should Visit All The Nodes Of A BST in Ascending Order Of The Node Key Values(Data).", () => {
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

  it("PREORDER(), Should Visit The Root Nood Fisrt Then Sub Trees Of The Left Child Of The Root Node Then The Subtrees Of The Right Node Last.", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(3);
    BST.insert(99);
    BST.insert(22);
    expect(BST.preOrder()).toEqual([23, 16, 3, 22, 45, 37, 99]);
  });

  it("POSTORDER(), Should Visit All The Child Nodes Of The Left Subtree Up To The Root Node, Then Does The Same For The Right Subtree", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    BST.insert(3);
    BST.insert(99);
    BST.insert(22);
    expect(BST.postOrder()).toEqual([3, 22, 16, 37, 99, 45, 23]);
  });

  it("LEVELORDER(), Should Be Visit Every Level Starting From The Root Then Root Left Child Then The Root Right Child", () => {
    const BST = new BinarySearchTree();
    BST.insert(9);
    BST.insert(4);
    BST.insert(17);
    BST.insert(3);
    BST.insert(6);
    BST.insert(22);
    BST.insert(5);
    BST.insert(7);
    BST.insert(20);
    BST.insert(10);
    expect(BST.levelOrder()).toEqual([9, 4, 17, 3, 6, 10, 22, 5, 7, 20]);
  });

  it("ISBALANCED(), Should Be Truthy If At Most The Differnece Is By One", () => {
    const BST = new BinarySearchTree();
    BST.insert(23);
    BST.insert(45);
    BST.insert(16);
    BST.insert(37);
    expect(BST.isBalanced()).toBeTruthy();
    BST.insert(40);
    expect(BST.isBalanced()).toBeFalsy();
  });
});
