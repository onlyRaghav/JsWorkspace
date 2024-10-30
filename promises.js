// Wap to find user details through a function findUser("username") by passing username and also write a function which returns the userlist

// Part 1:returning a user list

// function getUser() {
// return [
//   { username: "johnny", dept: "debugging" },
//   { username: "Catherine", dept: "Android" },
//   { username: "Sunny", dept: "IOS" },
//   { username: "Mia", dept: "Marketing" },
// ];
// }

// // Part 2: finding user details by username

// function findUser(username) {
//   let userList = getUser();
//   let user = userList.find((user) => user.username === username);
//   return user;
// }

// console.log(findUser("Mi"));

// WAP to find user object from an array of user object using findUser(username) after 1 second

// function getUser(callback){
//   setTimeout(()=>{
//     callback(
//       [
//         { username: "johnny", dept: "debugging" },
//         { username: "Catherine", dept: "Android" },
//         { username: "Sunny", dept: "IOS" },
//         { username: "Mia", dept: "Marketing" },
//       ]
//     )
//   },1000)
// }
// function findUser(username,callback){
//   getUser((users)=>{
//     const user=users.find(user=>user.username===username);
//     callback(user);
//   })
// }

// findUser("Mia",console.log);

let success = true;

const getUser = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Generating a new promise");
      if (success) {
        resolve([
          { username: "johnny", dept: "debugging" },
          { username: "Catherine", dept: "Android" },
          { username: "Sunny", dept: "IOS" },
          { username: "Mia", dept: "Marketing" },
        ]);
        success = false;
      } else {
        reject("Error while fetching data....");
      }
    }, 2000);
    anotherFn();
  });
};
const anotherFn=function(){
  console.log("this function is not bounded within setTimeout");
}
getUser()
  .then(
    (result) => console.log(result),
    (error) => console.log(error)
  )
  .finally(() => getUser())
  .catch((error) => console.log(error));
