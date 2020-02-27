class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
    this.push;
    this.pop;
    this.peek;
    this.length;
  }

  length() {
    return this.top;
  }

  push(value) {
    this.dataStore[this.top++] = value;
  }

  peek() {
    if (this.top === 0) {
      return;
    }
    return this.dataStore[this.top - 1];
  }

  pop() {
    if (this.top >= 0) {
      const poppedValue = this.dataStore[this.top - 1];
      const newStack = new Stack();

      for (let i = 0; i < this.top - 1; i++) {
        newStack.push(this.dataStore[i]);
      }

      this.top--;
      this.dataStore = newStack.dataStore;

      return poppedValue;
    }
  }
}

describe.skip("Stack Data Structure", () => {
  it("PUSH It Should Add A Value To The Top Of The Stack", () => {
    const StackDS = new Stack();
    StackDS.push(4);
    StackDS.push(5);
    StackDS.push(6);

    expect(StackDS.dataStore).toEqual([4, 5, 6]);
  });

  it("PEEK It Should Return The Value At The Top Of The Stack", () => {
    const StackDS = new Stack();
    StackDS.push(1);
    StackDS.push(2);
    StackDS.push(3);

    expect(StackDS.peek()).toBe(3);
  });

  it("POP Should Remove The Top Value", () => {
    const StackDS = new Stack();
    StackDS.push(7);
    StackDS.push(8);
    StackDS.push(9);
    StackDS.push(10);

    expect(StackDS.pop()).toBe(10);
    expect(StackDS.dataStore).toEqual([7, 8, 9]);
  });

  it("Should Return Empty [] If The Length Is 1", () => {
    const StackDS = new Stack();
    StackDS.push(11);

    expect(StackDS.pop()).toBe(11);
    expect(StackDS.dataStore).toEqual([]);
  });
});

//                                              IMPLEMENTATION 1
function reverse(word) {
  word = word.toLowerCase();
  const stack = new Stack();
  let reverseStr = "";

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  for (let j = 0; j < word.length; j++) {
    reverseStr += stack.pop();
  }

  if (word === reverseStr) {
    return true;
  }

  return false;
}

describe.skip("STACK IMPLEMENTATION PALINDROME", () => {
  it("Should Return True If Word Is A Palindrome.", () => {
    expect(reverse("racecar")).toBeTruthy();
  });

  it("Should Return True If Word Is A Palindrome.", () => {
    expect(reverse("1001")).toBeTruthy();
  });

  it("Should Return True If Word Is A Palindrome.", () => {
    expect(reverse("hello")).toBeFalsy();
  });
});

//                                      IMPLEMENTATION 2 RECURSION

function fact(n) {
  const newStack = new Stack();
  let result = 1;

  if (n === 0) {
    return 1;
  }

  for (let i = 0; i < n; i++) {
    newStack.push(n - i);
  }

  for (let j = 0; j < n; j++) {
    result *= newStack.pop();
  }

  return result;
}

describe.skip("STACK IMPLEMENTATION FACTORIAL", () => {
  it("Should Return The Factorial", () => {
    expect(fact(5)).toBe(120);
  });
});

//                                        IMPLEMENTATION 3

function check(exp) {
  const newStack = new Stack();
  let firstParentheses = 0;
  let secondParentheses = 0;

  for (let i = 0; i < exp.length; i++) {
    newStack.push(exp[i]);
  }

  for (let j = 0; j < exp.length; j++) {
    let parentheses = newStack.pop();

    if (parentheses === "(") {
      firstParentheses++;
    }
    if (parentheses === ")") {
      secondParentheses++;
    }
  }

  if (firstParentheses === secondParentheses) {
    return true;
  }

  return false;
}

describe.skip("STACK IMPLEMENTATION ARITHMETIC EXPRESSION CHECK", () => {
  it("Should Check If An Arithmetic Expression Has Balanced Parentheses", () => {
    const arithmeticExp = "2.3 + 23 / 12 + (3.14159 * .24";
    expect(check(arithmeticExp)).toBeFalsy();
  });

  it("Should Check If An Arithmetic Expression Has Balanced Parentheses", () => {
    const arithmeticExp = "2.3 + 23 / 12 + (3.14159 * .24)";
    expect(check(arithmeticExp)).toBeTruthy();
  });
});

//                                         IMPLEMENTATION 4

const dispenserStack = (firstColor, secondColor, thirdColor, fourthColor) => {
  const newStack = new Stack();
  newStack.push(firstColor.toLowerCase());
  newStack.push(secondColor.toLowerCase());
  newStack.push(thirdColor.toLowerCase());
  newStack.push(fourthColor.toLowerCase());
  return newStack;
};

function dispenser(dispenserStack, color) {
  const length = dispenserStack.top;
  const finalStack = dispenserStack;
  const resultStack = new Stack();

  for (let i = 0; i < length; i++) {
    if (finalStack.dataStore[i] !== color) {
      resultStack.push(finalStack.dataStore[i]);
    }
  }

  return resultStack.dataStore;
}

describe.skip("DISPENSER IMPLEMENTATION", () => {
  it("Should Return The Dispenser Without The Choosen Color", () => {
    const dispenserStac = dispenserStack("green", "BlUe", "yellow", "Red");

    expect(dispenser(dispenserStac, "yellow")).toEqual([
      "green",
      "blue",
      "red"
    ]);
  });
  it("Should Return The Dispenser Without The Choosen Color Repeated", () => {
    const dispenserStac = dispenserStack("yellow", "BlUe", "yellow", "Red");

    expect(dispenser(dispenserStac, "yellow")).toEqual(["blue", "red"]);
  });
});

//                                         IMPLEMENTATION 5(TO BE CONTINUED)

const trim = String => {
  let result = "";
  for (let i = 0; i < String.length; i++) {
    if (String[i] !== " ") {
      result += String[i];
    }
  }
  return result;
};

const precedence = (operator, stackOperator) => {
  let hashMap = {};

  for (let i = 0; i < 1; i++) {
    hashMap["/"] = 4;
    hashMap["*"] = 3;
    hashMap["+"] = 2;
    hashMap["-"] = 1;
    hashMap["="] = 0;
  }

  if (hashMap[operator] <= hashMap[stackOperator]) {
    return true;
  }
  return false;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function infixConversion(str) {
  const operatorStack = new Stack();
  const oparandStack = new Stack();
  let postFix = "";
  str = trim(str);

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
      oparandStack.push(str[i]);
    } else if (isNaN(parseInt(str[i], 10))) {
      operatorStack.push(str[i]);
    }
  }

  const operatorStackCopy = operatorStack.dataStore;
  operatorStack.dataStore = [];

  for (let j = 0; j < operatorStackCopy.length; j++) {
    for (let k = j + 1; k < operatorStackCopy.length; k++) {
      if (precedence(operatorStackCopy[j], operatorStackCopy[k])) {
        swap(operatorStackCopy, j, k);
      }
    }
  }
  operatorStack.dataStore = operatorStackCopy;
  const operatorStackLength = operatorStack.top;
  const oparandStackLength = oparandStack.top;

  for (let l = 0; l < oparandStackLength; l++) {
    postFix += oparandStack.pop();
  }
  for (let h = 0; h < operatorStackLength; h++) {
    postFix += operatorStack.pop();
  }
  return postFix;
}

describe.skip("INFIX TO POSTFIX CONVERSION", () => {
  it("Should Convert An Infix Exp To A PostFix Exp", () => {
    expect(infixConversion("7 = 1 + 3 * 2")).toMatch("7132*+=");
    expect(infixConversion("(A + B) * (C - D )")).toMatch("A B + C D - *");
  });
});
