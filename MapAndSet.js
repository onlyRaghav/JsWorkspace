let newMap = new Map();

// => creating key value pairs in newMap
newMap.set("name", "Raghav");
newMap.set("age", 18);
newMap.set(true, "boolean");

// => methods for Map
// console.log(newMap.has("age"));
// console.log(newMap.get(true));
// // newMap.clear();
// // console.log(newMap);
// // console.log(newMap.delete(true));
// console.log(newMap.size);

// => another way to set values in Map

newMap
  .set(Symbol("isfit"), true)
  .set(Symbol("isCharming"), true)
  .set(Symbol("isCommitted"), false);
// console.log(newMap);

// => Iteration over Map

// console.log(newMap.keys()); //returns an iterable of keys
// console.log(newMap.values()); //returns an iterable of values
// console.log(newMap.entries()); //returns an iterable of [key,value]

// for (let keys of newMap.keys()) {
//   console.log(keys);
// }
// for (let value of newMap.values()) {
//   console.log(value);
// }
// for (let pair of newMap.values()) {
//   console.log(pair);
// }

// => Create a Map from object using Object.entries()

let users = {
  name: "raghav",
  age: 18,
  isAGoodPerson: true,
  isHandsome: true,
};
let usersMap = new Map(Object.entries(users));
// console.log(usersMap);
// console.log(usersMap.get("age"));

// => Create a object from Map using Object.fromEntries()

let obj = Object.fromEntries(newMap);
// console.log(obj);

// =>Set(methods and properties)
let newSet = new Set();

newSet.add("raghav");
newSet.add("rishabh");
newSet.add("raghav"); //doesn't store duplicate values
// console.log(newSet);
// console.log(newSet.size);
// console.log(newSet.has("raghav"));
// console.log(newSet.clear());

// => Another way to store data in a Set

let anotherSet = new Set(["raghav", "rishabh", "rudrakshi", "raghav"]); //passing an array(or any iterable) as an argument during initialization

// anotherSet.forEach((item) => console.log(item));

// => Iteration over Set(same as Map)

// console.log(anotherSet.keys());
// console.log(anotherSet.values());
// console.log(anotherSet.entries());

// => Task 1
function unique(arr) {
  return new Set(arr);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
let result = unique(values);
// console.log(result);

// => task 2
function aclean(arr) {
  let newMap = new Map();
  for (let value of arr) {
    let sorted = value.toLowerCase().split("").sort().join();
    newMap.set(sorted, value);
  }
  return Array.from(newMap.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

