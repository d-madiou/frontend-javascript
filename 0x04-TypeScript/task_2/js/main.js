//let's Create a class Director that will implement DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'working from home';
    };
    Director.prototype.getCoffeBreak = function () {
        return 'getting a coffe break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
//let's Create a class Teacher that will implement TeacherInterfce
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
//let's create an instance of Director
var director = new Director();
//let's create an instance of Teacher
var teacher = new Teacher();
//Create a function createEmployee with the following requirements:
var createEmployee = function (salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
};
//let's write a function isDirector
var isDirector = function (employee) {
    return employee instanceof Director;
};
//let's write another function executeWork
var executeWork = function (employee) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
};
console.log(executeWork(createEmployee(200))); //Getting to work
executeWork(createEmployee(1000)); //Getting to director tasks
var teachClass = function (todayClass) {
    if (todayClass == 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
};
console.log(teachClass('Math'));
