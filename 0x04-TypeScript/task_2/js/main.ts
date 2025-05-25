interface DirectorInterface{
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface{
    workFromHome(): string;
    getCoffeBreak(): string;
    workTeacherTasks(): string;
}

//let's Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface{
    workFromHome(): string{
        return 'working from home'
    }
    getCoffeBreak(): string{
        return 'getting a coffe break'
    }
    workDirectorTasks(): string{
        return 'Getting to director tasks'
    }
}
//let's Create a class Teacher that will implement TeacherInterfce
class Teacher implements TeacherInterface{
    workFromHome(): string{
        return 'Cannot work from home'
    }
    getCoffeBreak(): string{
        return 'Cannot have a break'
    }
    workTeacherTasks(): string{
        return 'Getting to work'
    }
}
//let's create an instance of Director
let director = new Director();
//let's create an instance of Teacher
let teacher = new Teacher();

//Create a function createEmployee with the following requirements:
const createEmployee = (salary: string | number): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

//let's write a function isDirector
const isDirector = (employee: Director): employee is Director=>{
    return employee instanceof Director;
}

//let's write another function executeWork
const executeWork = (employee: Director | Teacher)=>{
    if(employee instanceof Director){
        return employee.workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

console.log(executeWork(createEmployee(200))); //Getting to work
executeWork(createEmployee(1000)); //Getting to director tasks

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects)=>{
    if(todayClass == 'Math'){
        return 'Teaching Math'
    }
    return 'Teaching History'
}
console.log(teachClass('Math'));