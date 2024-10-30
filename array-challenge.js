// task 1
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}
// console.log(camelize("background-color"));

// task 2
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// task 3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
// filterRangeInPlace(arr, 1, 2);
// console.log(arr);

// task 4

let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
// console.log(arr2);

// task 5
function copySorted(arr) {
  return arr.slice().sort();
}
let arr3 = ["HTML", "Javascript", "CSS"];
let sorted = copySorted(arr3);
// console.log(sorted);
// console.log(arr3);

// task 6
function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let sample = str.split(" ");
    // console.log(typeof sample);
    let a = +sample[0];
    let op = sample[1];
    let b = +sample[2];
    if (!this.method[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    } else {
      return this.method[op](a, b);
    }
  };
  this.addMethod = function (name, func) {
    this.method[name] = func;
    console.log("method added successfully");
  };
}

// task 7

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names= users.map((item=>item.name));
// console.log(names);

// task 8

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped=users.map((item)=>({
//   fullName:item.name +" "+ item.surname,
//   id:item.id
// }));
// console.log(usersMapped);

// task 9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr4 = [pete, john, mary];

// sortByAge(arr4);

// console.log(arr4[0].name);
// console.log(arr4[1].name);
// console.log(arr4[2].name);

// task 11

function getAverageAge(arr) {
  return Math.floor(
    arr.reduce((prev, curr) => prev + curr.age, 0) / arr.length
  );
}

// console.log(getAverageAge(arr4));

// task 12

function unique(arr) {
  let newarr = [];
  for (let item of arr) {
    if (!newarr.includes(item)) {
      newarr.push(item);
    }
  }
  return newarr;
}

let strings = [
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
// console.log(unique(strings));

// task 13
function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    console.log(obj);
    return obj;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// console.log(groupById(users));
