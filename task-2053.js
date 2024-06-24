/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const arrMap = new Map();
  const dArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arrMap.has(arr[i])) {
      // already in Map, increment
      let value = arrMap.get(arr[i]) + 1;
      arrMap.set(arr[i], value);
    } else {
      arrMap.set(arr[i], 1);
    }
  }
  for (const key of arrMap.keys()) {
    arrMap.get(key) === 1 ? dArr.push(key) : null;
  }
  return k <= dArr.length ? dArr[k - 1] : "";
};

console.log(kthDistinct(["d", "b", "b", "a"], 3));

/**
{
    d: 1
    b: 2
    a: 1
}
dArr = [d, a]
return dArr[k]
 */
