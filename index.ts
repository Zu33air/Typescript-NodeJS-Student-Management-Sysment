#! /usr/bin/env node
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}

class Student extends Person {
  rollNo: string;
  courses: Course[] = [];
  constructor(name: string, rollNo: string, age: number) {
    super(name, age);
    this.rollNo = rollNo;
  }
  registerForaCourse(newCousrse: Course) {
    this.courses.push(newCousrse);
  }
}

class Instructor extends Person {
  private salary: number;
  courses: Course[] = [];
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  assignedCourse(instructorCourses: Course) {
    this.courses.push(instructorCourses);
  }
}

class Course {
  id: string;
  name: string;
  students: Student[] = [];
  instructor!: Instructor;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
    student.registerForaCourse(this);
  }

  setInstructor(instructor: Instructor) {
    this.instructor = instructor;
    instructor.assignedCourse(this);
  }
}
class Department {
  name: string;
  courses: Course[] = [];
  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }
}
const student1 = new Student("Zubair ahmad", "student1", 24);
const student2 = new Student("Jacob Green", "student2", 25);

const instructor1 = new Instructor("Peter", 44, 45000);
const instructor2 = new Instructor("Zia Khan", 55, 500000);

const course1 = new Course("IOT1", "METAVERSE");
const course2 = new Course("IOT2", "BCC");

const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);

course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
course2.addStudent(student1);
course2.addStudent(student2);
course2.setInstructor(instructor1);

console.log(department1);

//instructor1.assignedCourse("METAVERSE");
// console.log(instructor1.age);
// console.log(instructor1.courses);

// console.log(course1.students);
// console.log(student1.courses);

// console.log(course1.instructor);
