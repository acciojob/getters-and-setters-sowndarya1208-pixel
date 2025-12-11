//complete this code
let
class Person {
    constructor(name,age){
		this.name=name;
		this.age=age;
	}
	}
class Student extends Person {
	constructor(name,age){
		study():void{
			return this.name+"is studing";
		}
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
		
	teach():void{
			return this.name+"is teaching";
		
	}
}


const person=new person("John",25);
console.log(person.name);
person.age=30;
console.log(person.age);

const student = new Student("John", 22);
student.study();
console.log(student.study())

const teacher = new Teacher("John", 40);
teacher.teach(); 
console.log(teacher.teach());

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
