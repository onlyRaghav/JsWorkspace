const btn=document.querySelector("#btnGet");
const data_fetch_time=5000;
const timeOut=500;

function TimeOut(){
    return new Promise(reject=>{
        setTimeout(()=>{
            console.log("timeout wins");
            reject();
        },timeOut)
    })
}
function getMsg(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Message wins");
            const message="Promise.race() demo"
            resolve(message);
        },data_fetch_time)
    })
}

function showLoader(){
    document.querySelector("#loader").className="loader";
}
function hideLoader(){
    document.querySelector("#loader").className=" ";
}

function showMessage(message){
    document.querySelector("#message").textContent=message;
}

function reset(){
    document.querySelector("#message").textContent=" ";
    showLoader();
}

btn.addEventListener('click',(e)=>{
    console.log("clicked");

    Promise.race([getMsg()
        .then(showMessage)
        .then(hideLoader),
        TimeOut()
    ]).catch(showLoader);
    
    reset();
})
