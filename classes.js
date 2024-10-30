let data="fuck you bitch";
class User{
    constructor(Username,email){
        this.name=Username;
        this.email=email;
    }
    viewData(){
        console.log(`Data:${data}`);
    }
}
class Admin extends User{
    canEdit(){
        console.log("You have access to edit data.")
    }
}

let user1=new User("Raghav","abc@gmail.com");
user1.viewData();

let Admin111 = new Admin("Pramod PrajaPati","Admin111@gmail.com");
Admin111.canEdit();