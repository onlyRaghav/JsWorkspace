// User info object
function User(username,
    sum_result=null
    ,mul_result=null,
    diff_result=null,
    div_result=null)
    {
    this.userName=[this.sum=sum_result,
        this.mul=mul_result,
       this.diff=diff_result,
       this.div=div_result];
}


// calculator operations obj

const calculator={
    sum:function(){
        return this.a + this.b;
    },
    mul:function(){
        return this.a * this.b;
    },
    div:function(){
        return this.a / this.b;
    },
    diff:function(){
        return this.a - this.b;
    },
    read(){
        this.a= +prompt("Enter no1:",0);
        this.b= +prompt("Enter no2:",0);
    }
}

//Choice from user for calc operations
const option=function(){
    let choice= +prompt("1.sum\n2.multiply\n3.divide\n4.difference\n\nYour choice:");
    return choice;
}

//Main codebase
confirmBreak:
while(true){
    alert("Welcome to the Calc Calculator");
    const iswant= confirm("Do You want to perform calculations");
    let iscontinue=false;
    if(iswant){
        let userName= prompt("Enter Your name:","Anonamous");
        userName=new User(userName);
        againCalculate:
        switch(option()){
            case 1:
                calculator.read();
                alert(calculator.sum());
                break;
            case 2:
                calculator.read();
                calculator.mul();
                break;
            case 3:
                calculator.read();
                calculator.div();
                break;
            case 4:
                calculator.read();
                calculator.diff();
                break;
            default:
                alert("none of the option chosen");
                break;
        }
    }
    else{
        console.log("OHHH sad to see you go");
        break;
    }
    
}