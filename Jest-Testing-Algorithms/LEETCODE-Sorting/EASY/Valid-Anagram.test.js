function vaildAnagram(s, t) {
  "use strict";

  let hashMap = {};
  let resultArray = [];

  for (let i = 0; i < s.length; i++) {
    resultArray.push(s[i]);
    hashMap[s[i]] = true;
  }
  for (let j = 0; j < t.length; j++) {
    if (!hashMap[t[j]]) {
      return false;
    }
  }
  if (resultArray.length === t.length) {
    return true;
  }
}
//Time Complexity = O(n);
//Space Complexity = O(n);

test.skip("that a string t is an anagram of a string s.", () => {
  const s = "anagram";
  const t = "nagaram";
  expect(vaildAnagram(s, t)).toBeTruthy();
});

test.skip("that it should return false if s and t are not anagarams.", () => {
  const s = "rat";
  const t = "car";
  expect(vaildAnagram(s, t)).toBeFalsy();
});

test.skip("string t and string s have the same length.", () => {
  const s = "tester";
  const t = "testerr";
  expect(vaildAnagram(s, t)).toBeFalsy();
});
