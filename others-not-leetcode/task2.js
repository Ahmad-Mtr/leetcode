function isPrime(num) {
  if (num === 0) return false;
  else if (num === 1 || num === 2) return true;
  else if (num % 2 === 0) return false;
  else {
    // exp: 15
    let value = 2;
    while (value < num) {
      for (let i = 3; i < num / 2; i++) {
        if (value * i === num) return false;
      }
      value++;
    }
    return true;
  }
}

let arr = [1, 43, 22, 7, 15,33];
let primeArr=[]
console.log(`Arr: ${arr}`);
for (const num of arr) {
    if (isPrime(num)){
        primeArr.push(num);
    }
}
console.log(`Prime Arr: ${primeArr}`);
