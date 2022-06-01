//What is creation phase and execution phase?

//creation phase - *Its picks all the function declarations and stores them in memory with their reference.
//                 *It picks all the variable and assigned the value as undefined.

//execution phase - *variables assigned with values.
//                  *functions executed.

//What are objects in javascript?

//An object is an unordered collection of key-value pairs. Each key-value pair is called a property.
//its consists of properties and methods.
//object have keys which are converted to string types, the properties and method do not follow the insertion order.

let student = {
    name:"vishnupriya",
    rollno : 56,
    college : "SKET"
}
console.log(student);
console.log(student.name);

//What are function constructors?

//function constructor creates a new function objects.
//the Function constructor creates functions which execute in the global scope only.

const func = new Function('a', 'b', 'console.log (a + b)');
func(2, 6);

//Explain prototypes

//The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property is not visible.

const studentPrototype = {
    calcAge(){
        console.log(2022 -this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const name1 = Object.create(studentPrototype);
console.log(name1);
name1.initialise("vishnu","priya",1999);
console.log(name1);
name1.calcAge();

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null

//What is prototype chain?

//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null

//Give an example of call(), apply(), bind()
let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
}

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,
    
}

function showDetails(age,gender) {
    console.log(this.name, this.id, this.designation,age,gender);
}

showDetails.call(employee1,21,"M");
showDetails.call(employee2,22,"M");
showDetails.call(employee3,23,"M");

showDetails.apply(employee1,[21,"M"]);
showDetails.apply(employee2,[22,"M"]);
showDetails.apply(employee3,[23,"M"]);


showDetails.bind(employee1)(21,"M");

let res2 =showDetails.bind(employee2);
res2(22,"M");
let res3 =showDetails.bind(employee3);
res2(23,"M");


//give an example of inheritance using function constructor


function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

    
    Employee.call(this, name, age, gender, id);

    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);

//What are callbacks?

//A JavaScript callback is a function which is to be executed after another function has finished execution.

function myFirst() {
  console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  mySecond();
  myFirst();

//What is the use of setTimeout?

//after a certain times the fuction will executes.

setTimeout(() => {
    console.log("setTimeout")
}, 1000);

//What is callback hell

//it is an asynchronous operation. they are just a name or convention for using javascript function. It is instead of returning result immediately like other function takes time to produce the result these are more like an I/O operations.

const callbackhell = () => {
   
    setTimeout(() => {
        console.log("call");

        setTimeout(() => {
            console.log("back");
            
            setTimeout(() => {
                console.log("hell");
           
            }, 4000);
        
        }, 3000)
  
    },2000);
}

callbackhell();

//What is an event loop and call stack

//A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions.
//JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

//Explain call(), apply() and, bind() methods

//process for borrowing function
//call() method invokes a function with a given this value and arguments provided one by one.
//apply() method invokes the function with a given this value and allows you to pass in arguments as an array.
//bind() method returns a new function, allowing you to pass any number of arguments.