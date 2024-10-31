/*The program below is an example of
Promise.all() in which all the listed promises within the
Promise.all() will first resolve and then
the Promise.all will return a single promise resolve to
the array of result of each listed promise*/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});

// The example below will return a single promise as one of the listed
// promises of Promise.all is rejected and hence it's own status will
// also become rejected regardless whether the other the promises are fulfilled or rejected
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 2 * 1000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p4, p5, p6]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
}).catch(err=>console.log(err));
