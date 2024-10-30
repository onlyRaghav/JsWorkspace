function printNumbers(from, to) {
    let current=from;
    let timerId=setInterval(()=>{
        console.log(current);
        if(current==to){
            clearInterval(timerId);
        }
        current++;
    },1000)
}
// printNumbers(1,10);

function printNumbersv2(from,to){
    let current=from;
    let timerId=setTimeout(function go(){
        console.log(current);
        if(current<to){
            setTimeout(go,1000)
        }
        current++;
    },1000);
}

printNumbersv2(2,10);