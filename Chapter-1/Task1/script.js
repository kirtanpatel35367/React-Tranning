//Using Objects
let person={
    name:"Kirtan Patel",
    age:20,
    hobbies:['Cricket','VollyBall','FootBall'],
    
    person_details:function(){
        console.log(`Hello My name is ${this.name} and age is ${this.age} and Hobbies are ${this.hobbies}`)
    }
}

//Direct Access Properties
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)


//Display Details Through Function
person.person_details()


