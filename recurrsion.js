const pow = (x, n) => {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
};
let result2 = pow(3, 3);
// console.log(result2);

let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalary(dept){
  if(Array.isArray(dept)){
    return dept.reduce((prev,curr)=>prev + curr.salary,0)
  }else{
    let sum=0;
    for(subdept of Object.values(dept)){
      sum+=sumSalary(subdept);
    }
    return sum;
  }
}
console.log(sumSalary(company));
// Task 1
function sumToV1(n) {
  return n == 1 ? n : n + sumToV1(n - 1);
}

function sumToV2(n) {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

function sumToV3(n) {
  return (n * (1 + n)) / 2;
}
let result3 = sumToV1(5);
// console.log(result3);

// sumToV2(2);

// console.log(sumToV3(4));


// Task 2
const factorial = function (n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
let result = factorial(5);
// console.log(result);

function Fibonaci(n){
  if(n==1){
    return 1;
  }else{
    return result=Fibonaci(n-1) + Fibonaci(n-2);
  }
}
// console.log(Fibonaci(3));