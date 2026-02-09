// Q1) Create an array of states in india. Remove all the names starting with vowels from the list. Use array.filter.
const states = [
  "Maharashtra",
  "Assam",
  "West Bengal",
  "Punjab",
  "Uttarakhand",
  "Karnataka",
  "Tamil Nadu",
  "Kerala",
  "Orissa",
  "Sikkim",
  "Tamil Nadu",
  "Rajasthan"
];

const result = states.filter(state => {
  const firstChar = state[0].toLowerCase();
  return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(result);