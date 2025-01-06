let student={
    name:"Kirtan Patel",
    age:21,
    contactNo:"0000000000",
    student_details:function(){
        console.log(`Student Name is ${name} and age is ${age}`)
    }
}

let {name,age}=student;

console.log(`Hello, my name is ${name} and I am ${age} years old.`)

