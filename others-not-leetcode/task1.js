// Given 2 String Arrays, Determine Common Substring

function commonSubString(a, b) {
  console.log("i\ta[i]\tb[i]\tCommon\tResult");
  for (let i = 0; i < a.length; i++) {
    let common = "";
    let isCommon = false;
    for (let j = 0; j <  a[i].length; j++) {
        if (a[i].charAt(j) === b[i].charAt(j) ) {
            common += a[i].charAt(j)
            isCommon = true;
        }
        
    }

    console.log(`${i}\t${a[i]}\t${b[i]}\t${isCommon === true ? common : ''}\t${isCommon}`);
  }
}

const a = ["ab", "cd", "ef"];
const b = ["af", "ee", "ef"];

commonSubString(a, b);
