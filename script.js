//complete this code
/**
 * Represents a person with a name and age.
 */
class Person {
  private _name: string;
  private _age: number;

  /**
   * Initializes a new person with a given name and age.
   * @param name The name of the person.
   * @param age The age of the person.
   */
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  /**
   * A getter method to return the name of the person.
   */
  public get name(): string {
    return this._name;
  }

  /**
   * A getter method to return the age of the person.
   */
  public get age(): number {
    return this._age;
  }

  /**
   * A setter method to update the age of the person.
   * @param age The new age of the person.
   */
  public set age(age: number) {
    this._age = age;
  }

  /**
   * A setter method to update the name of the person.
   * @param name The new name of the person.
   */
  public set name(name: string) {
    this._name = name;
  }
}

/**
 * Represents a student who can study, inheriting from Person.
 */
class Student extends Person {
  /**
   * Initializes a new student with a given name and age.
   * @param name The name of the student.
   * @param age The age of the student.
   */
  constructor(name: string, age: number) {
    super(name, age);
  }

  /**
   * Logs a message to the console that indicates the student is studying.
   */
  public study(): void {
    console.log(`${this.name} is studying`);
  }
}

/**
 * Represents a teacher who can teach, inheriting from Person.
 */
class Teacher extends Person {
  /**
   * Initializes a new teacher with a given name and age.
   * @param name The name of the teacher.
   * @param age The age of the teacher.
   */
  constructor(name: string, age: number) {
    super(name, age);
  }

  /**
   * Logs a message to the console that indicates the teacher is teaching.
   */
  public teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Example Code Usage (for verification)

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Export the classes if required by the test environment
// module.exports = { Person, Student, Teacher }; // Uncomment if needed


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
