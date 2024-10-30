let user={
    name:"Raghav",
    isAvailable:false,
}
let age=Symbol("userAge");
user[age]=18;       //adding symbol as a user-obj property
// console.log(user[age]);
// console.log(typeof age);
// console.log(age.toString());
// console.log(user);


// Symbols can't be retrieved using for..in and Object.keys
for(key in user){
    // console.log(key);
}
// console.log(Object.keys(user));


// Symbols can be accessed using Object.getOwnPropertySymbols()
let symbols_prop=Object.getOwnPropertySymbols(user);
// console.log(symbols_prop);


//Symbols property can be copied while cloning using Object.assign();
let clone=Object.assign({},user);
// console.log(clone);
// console.log(user[age]);


//Creating or Reading global symbols using Symbol.for()

let globalsym=Symbol.for("id");
let cloneGlobalSym=Symbol.for("id");

// console.log(globalsym==cloneGlobalSym);

//Retrieving description(i.e symbol name ) using Symbol.forKey()

let description=Symbol.keyFor(globalsym);
// console.log(description);
