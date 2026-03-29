// Trad function 

function sayHello() {
    return "Hello!";
}
console.log(sayHello()); 

//arrow function

const greet = () => "Hello!";
 
console.log(greet());

// trad & arrow function with one parameter

function multiplyByTwo(n) {
    return n * 2;
}

console.log(multiplyByTwo(5));

// Arrow funct.

let double = n => n * 2;

console.log(double(5));

// trad & arrow funct. with two parameter

function addNumbers(a,b) {
    return a + b;
}

console.log(addNumbers(2, 2));


// Arrow funct.

const add = (a, b) => a + b;
console.log(add(2, 2));

// trad and arrow funct with diff return types like returning a string
function welcomeMessage(name) {
    return "Welcome, " + name + "!";
}

console.log(welcomeMessage("David"));

// Arrow funct.
const greetUser = name => "Welcome, " + name + "!";

console.log(greetUser("David"));

// Trad and arrow funct. returning a boolean 
function checkAge(age) {
    return age >= 20;
}
console.log(checkAge(24));

// Arrow funct.
const isAdult = age => age>= 20;
console.log(isAdult(18));

//Trad & arrow func. with explicit return and curly braces

function calculateGrade(score) {
    if (score >= 50) {
        return "Pass";
       
    }  else {
            return "Fail";
        }
};
console.log(calculateGrade(70));

// Arrow funct.

const getGrade = (score) => {
    if (score >= 50) {
        return "Pass";
    } else {
            return "Fail";
        }
};
console.log(getGrade(30));

// Trad & Arrow funct. for checking hoe this works differently in both

const student = {
    name: "Tolu",
    scores: [80, 90, 70],

    printWithTrad: function () {
        this.scores.forEach(function (score) {
            console.log(this.name + " got " + score);
        });

    },

    printWithArrow: function () {
        this.scores.forEach((score) => {
            console.log(this.name + " got " + score);
        });

    },
} 

console.log("trad function (this is lost):");
student.printWithTrad();

console.log("arrow function (this is lost):");
student.printWithArrow();




