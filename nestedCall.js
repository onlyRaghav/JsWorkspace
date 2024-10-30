function nesting(callback){
    callback();
    console.log("This is main block");
}
nesting(()=>console.log("this is nested block"));