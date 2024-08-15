// Initial array of students
const students = [
    { id: 1, firstName: "Sourav", lastName: "Chakraborty", age: 21, grade: "A" },
    { id: 2, firstName: "Rahul", lastName: "Sharma", age: 22, grade: "B" },
    { id: 3, firstName: "Anita", lastName: "Bansal", age: 20, grade: "A" },
    { id: 4, firstName: "Meera", lastName: "Patel", age: 23, grade: "C" },
    { id: 5, firstName: "Arjun", lastName: "Kumar", age: 19, grade: "B" },
    { id: 6, firstName: "Priya", lastName: "Verma", age: 21, grade: "A" },
    { id: 7, firstName: "Vikram", lastName: "Singh", age: 22, grade: "B" },
    { id: 8, firstName: "Sneha", lastName: "Reddy", age: 20, grade: "A" },
    { id: 9, firstName: "Ravi", lastName: "Nair", age: 24, grade: "C" },
    { id: 10, firstName: "Deepak", lastName: "Joshi", age: 23, grade: "B" }
];

// a. Add a student
function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

// b. Update student information
function updateStudent(id, newFirstName, newLastName, newAge, newGrade) {
    const student = students.find(student => student.id === id);
    if (student) {
        student.firstName = newFirstName || student.firstName;
        student.lastName = newLastName || student.lastName;
        student.age = newAge || student.age;
        student.grade = newGrade || student.grade;
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// c. Delete a student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// d. List all students
function listAllStudents() {
    console.log("List of all students:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find students by grade
function findStudentsByGrade(grade) {
    const studentsInGrade = students.filter(student => student.grade === grade);
    return studentsInGrade;
}

// f. Calculate average age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Example usage:
// Adding a new student
addStudent(2, "Rahul", "Sharma", 22, "B");

// Updating a student's information
updateStudent(1, "Sourav", "Roy", 22, "A+");

// Deleting a student
deleteStudent(2);

// Listing all students
listAllStudents();

// Finding students by grade
const studentsWithGradeA = findStudentsByGrade("A");
console.log("Students with grade A:", studentsWithGradeA);

// Calculating the average age
const averageAge = calculateAverageAge();
console.log("Average age of students:", averageAge);