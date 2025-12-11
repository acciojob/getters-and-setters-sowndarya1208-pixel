//complete this code

class Person {
    constructor(name, age) {
        // Use private-like properties (JS convention before true private fields)
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    // Getter for age (added for completeness/example code console.log(person.age) to work)
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    constructor(name, age) {
        // Call the parent constructor
        super(name, age);
    }
    
    // Define methods outside the constructor function
    study() {
        // Log to console as required by the prompt
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }
		
    // Define methods outside the constructor function
    teach() {
        // Log to console as required by the prompt
        console.log(this.name + " is teaching");
    }
}


// Example execution (as provided in the original request)

// Note: The original example code had a capitalization error in the constructor call ("new person" should be "new Person")
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30; // Using the setter
console.log(person.age); // Output: 30

const student = new Student("Alice", 22); // Changed name to Alice to match example behavior description
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40); // Changed name to Bob to match example behavior description
teacher.teach(); // Output: Bob is teaching


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
