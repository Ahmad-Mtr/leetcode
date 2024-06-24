/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let subString = (str = "");
  
  // Iterate through whole  chars
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    // str ! has s char --> insert to str;
    if (!str.includes(element)) {
      str += element;
      if (str.length <= subString.length) {
      } else if (str.length > subString.length) {
        subString = str;
      }
    } else if (str.includes(element)) {
      // cmp with Substring
      // Check for resetting str
      if (str.slice(-1) === element) {
        //reset
        if (str.length <= subString.length) {
        } else if (str.length > subString.length) {
          subString = str;
        }
        str = element;
      } else if (str.charAt(0) === element) {
        // remove char(0)
        str = str.slice(1) + element;
        if (str.length <= subString.length) {
        } else if (str.length > subString.length) {
          subString = str;
        }
      }else{
        str = str.slice(str.indexOf(element) +1) +element;
         if (str.length > subString.length) {
          subString = str;
        }
      }
    }
  }
  return subString.length;
};
console.log(lengthOfLongestSubstring("ohvhjdml"));
// str has s char -->
// pw wkew        dv df
//                   repeateed char is at last index
//                   repeateed char is at first index
//                   repeateed char is at middle index   kwl w

/*
"b" 1
str has b 
*/

// if (s.length === 0) return 0;
// let len = 1,
//   start = 0,
//   end = 0;
// let str = subString = s.charAt(0);
// for (let i = 1; i < s.length; i++) {
//   const element = s[i];
//   if (str.includes(element)) {
//     // pw w
//     // sub > str -- > str = s[i]
//     if (subString.length >= str.length) str = element;
//     else if (subString.length < str.length) {
//       // sub < str -- > sub = str, str = s[i]
//       subString = str;
//       str = element;
//       len = subString.length;
//     }

//     // dv d
//     // abc a
//     // pwwkw
//     console.log("@includes ", str, element, subString);
//   } else {
//     console.log("@else", str, element);
//     // p w
//     str += element;
//     console.log("::::::::@else", str, element);
//     if (subString.length < str.length) {
//       // sub < str -- > sub = str, str = s[i]
//       subString = str;

//       len = subString.length;
//     }
//   }

// }

// return subString.length;
