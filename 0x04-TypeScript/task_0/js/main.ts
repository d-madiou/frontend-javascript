interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//let's create the 2 students that shhould match
const student1: Student= {
    firstName: 'Thierno',
    lastName: 'Diallo',
    age: 20,
    location: 'Alor setar'
}
const student2: Student= {
    firstName: 'Karamoko',
    lastName: 'Diallo',
    age: 20,
    location: 'siminko'
}

//let's create the array of students
const studentsList: Student[] = [student1, student2];

//let's create a table element
const table = document.createElement('table');
// now we can loop through each and render a row 
studentsList.forEach((student)=>{
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
//let's add the table to the page
document.body.appendChild(table);