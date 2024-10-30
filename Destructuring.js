let arr = ["raman", "sumit", "arpit", "Harshit"];
let [user1, user2, user3, user4] = arr; //destructuring of an array
// console.log("user1", user1);
// console.log("user2", user2);
// console.log("user3", user3);
// console.log("user4", user4);

// => Skipping an element while destructuring

let newArr = ["kshitij", "jeet", "pratham", "prem"];
let [user5, , user6, user7] = newArr;
// console.log("user5", user5);
// console.log("user6", user6);
// console.log("user7", user7);

// => destructing a set and storing to object
let set = new Set(newArr);
let obj = {};
[obj.name1, obj.name2, obj.name3] = set;
// console.log(obj);

// => iteration while destructuring assignment

// for (let [key, value] of Object.entries(obj)) {
//   console.log(`${key}:${value}`);
// }

// => Storing remaining items of a destructured array using ...rest
// let [empid, empName, empAge, ...rest] = "101 Neeraj 30 Present 29/1/2000".split(
//   " "
// );
// console.log(typeof rest);
// console.log(rest[0]);
// console.log(rest[1]);
// => Object Destructuring

let book = {
  title: "It End With Us",
  author: "Raghav Sharma",
  price: 10000,
};
// let { title, author, price } = book;
// console.log(title);
// console.log(author);
// console.log(price);

// => assignning values of destructured object in colon format

// let { author: aut, title: T, price: P } = book;
// console.log(typeof aut);
// console.log(T);
// console.log(typeof P);

// => Storing remaining items of a destructured object using ...rest
let newset = new Set("101 Neeraj 30 Present 29/1/2000".split(" "));
let {
  101: empid,
  Neeraj: empName,
  30: empAge,
  ...rest
} = Object.fromEntries(newset.entries());
// console.log(rest);

// => Nested Destructuring

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// let {
//   size: { width: w, height: h },
//   items: [item1, item2],
//   title = "Menu",
// } = options;
// console.log(w);
// console.log(h);
// console.log(title);
// console.log(item1);
// console.log(item2);

// => Smart Function Parameters

function variables({
  size: { width: w, height: h = 0 },
  items: [item1, item2],
  title = "Anonamous",
  ...rest
} = {}) {
  console.log(`${w} ${h} ${item1} ${item2} ${title} ${Object.entries(rest)}`);
}
// variables();

// => Task 1

let user = {
  name: "John",
  years: 30,
};
let { name, years: age, isAdmin = "false" } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// => Task 2

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(obj) {
  let deco_array = Object.entries(obj);
  let maxSalary = 0;
  let userName = null;
  if (deco_array.length != 0) {
    for (let [name, salary] of deco_array) {
      if (salary > maxSalary) {
        maxSalary = salary;
        userName = name;
      }
    }
  } else {
    return null;
  }
  return userName;
}
let result = topSalary(salaries);
console.log(result);
// console.log(Object.entries(salaries).length);
