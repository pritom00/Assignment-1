// 1. 
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}
//console.log("filterEvenNumbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// 2. 
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
//console.log("reverseString:", reverseString("typescript"));


// 3. 
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
    return typeof input === "string" ? "String" : "Number";
}
//console.log("checkType('Hello'):", checkType("Hello"));
//console.log("checkType(42):", checkType(42));


// 4. 
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
//const user = { id: 1, name: "John Doe", age: 21 };
//console.log("getProperty:", getProperty(user, "name"));


// 5. 
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    };
}
//const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
//console.log("toggleReadStatus:", toggleReadStatus(myBook));


// 6. 
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
//const student = new Student("Alice", 20, "A");
//console.log("student.getDetails():", student.getDetails());


// 7. getIntersection
function getIntersection(arr1: number[], arr2: number[]): number[] {
    const set2 = new Set(arr2);
    return arr1.filter(num => set2.has(num));
}
//console.log("getIntersection:", getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));