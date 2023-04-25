function saySomething() {
    var greeting = "Hello";
    {
        // greeting = "Howdy"; // error comes from here
        let greeting = "Hi";
        console.log(greeting);
    }
}

// saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization

const teacher = function ofTheTeacher() {
    console.log(ofTheTeacher);
};

teacher();
console.log(teacher.name);
console.log(ofTheTeacher.name);
