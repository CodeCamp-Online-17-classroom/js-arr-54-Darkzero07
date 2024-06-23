// จงนับชื่อที่ปรากฏใน names

let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

const counts = {};
names.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});
console.log(counts)
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}