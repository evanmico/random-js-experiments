let a = 3;
let b = null; // adding null adds 0, but adding undefined results in NaN
let c = a + Number(b);
console.log(c);