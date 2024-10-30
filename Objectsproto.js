function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log(`${this.name} can speak`);
}
Animal.prototype.eat=function(){
    console.log(`${this.name} can eat`);
}
Animal.prototype.sleep=function(){
    console.log(`${this.name} can sleep`);
}
const Human=new Animal("human");
Human.eat();
Human.sleep();