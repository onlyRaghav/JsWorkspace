// SC of getting output times 2 using promise chaining

function getTen(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3000);
  });
}
function syncFunction(num){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(num);
    },5000)
  })
}
const result=syncFunction(10).then((val)=>{
  console.log(val);
  return val * 2;
});
console.log(result);
/*getTen(10)
  .then((result) => {
    console.log(result);
    return getTen(result * 2);
  })
  .then((result) => {
    console.log(result);
    return getTen(result *3);
}
).then(result=>console.log(result));

const promise = new Promise((resolve, reject) => {
  console.log("fetching Data....");
  setTimeout(() => {
    resolve("Your requested data...\n");
  }, 5000);
});

let success=false;

promise
  .then((result) => {
    console.log(result);
    return new Promise((reject, resolve) => {
      setTimeout(() => {
        console.log("Fetching data again...");
        if(success){
          resolve("Displayed after three seconds!\n");
        }
        else{
          reject("unable to fetch data");
        }
      }, 3 * 1000);
    });
  })
  .then((result) => {
    console.log(result);
  },(err)=>{
    console.log(err);
  });
*/