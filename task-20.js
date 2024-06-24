/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let pStack = [];
  function isEmpty() {
    return pStack.length === 0 ? true : false;
  }
  function isRight(ch) {
    return ch === "}" || ch === "]" || ch === ")" ? true : false;
  }
  const _1stElement = s.charAt(0);
  if (isRight(_1stElement) || s.length === 1) {
    return false;
  }

  pStack.push(_1stElement);

  for (let i = 1; i < s.length; i++) {
    const element = s.charAt(i);
    if (isEmpty()) {
      // empty ? closeTag--false : insert
      if (isRight(element)) {
        return false;
      }
      pStack.push(element);
    } else if (isRight(element)) {
      // closeTag ? diff return 0 : clear
      switch (element) {
        case "]":
          if (pStack[pStack.length - 1] != "[") {
            return false;
          } else {
            pStack.pop(pStack[pStack.length - 1]);
          }
          break;
        case "}":
          if (pStack[pStack.length - 1] != "{") {
            return false;
          } else {
            pStack.pop(pStack[pStack.length - 1]);
          }
          break;
        case ")":
          if (pStack[pStack.length - 1] != "(") {
            return false;
          } else {
            pStack.pop(pStack[pStack.length - 1]);
          }
          break;

        default:
          break;
      }
    } else {
      // insert
      pStack.push(element);
    }
  }
  return isEmpty() ? true : false;
};

console.log(isValid("["));
/*
[ {          ]
[ {}    POP      ]
[ { [ }          ]

[ }          ] X


--> true
*/
