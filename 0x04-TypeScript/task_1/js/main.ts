interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearOfExperience?: number;
    location: string;
    [key: string]: any;
}
// example usage
const teacher3: Teacher = {
    firstName: 'camara',
    lastName: 'Mamadou',
    fullTimeEmployee: false,
    location: 'New York',
    contract: false,
    };

//let's write an interface for that function
interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

//let's create a function printTeacher that can accept the first and lastname

const printTeacher: printTeacherFunction =(firstName, lastName)=>{
    return `${firstName.charAt(0)}. ${lastName}`
};
console.log(printTeacher('camara', 'Mamadou')) //CM. Mamadou


// the constructor of the class
interface StudentInterface{
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor{
    firstName: string;
    lastName: string;
}
//in this part we will first create a class students class
class StudentClass implements StudentInterface{
    firstName:string;
    lastName: string;

    constructor({firstName, lastName}: StudentConstructor){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string{
        return 'currently working'
    }
    displayName(): string{
        return this.firstName
    }
}
const student = new StudentClass({ firstName: "Thierno", lastName: "Diallo" });

console.log(student.displayName());     // Output: Thierno
console.log(student.workOnHomework());  // Output: Currently working
