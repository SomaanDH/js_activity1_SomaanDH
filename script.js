const students = [
    { name: "Su Man", studentId: "202300232", department: "Information Technology" },
    { name: "Siwaporn", studentId: "202300233", department: "Information Technology" },
    { name: "Daniel", studentId: "202300234", department: "Software Engineering" }
];

console.log("CLASS STUDENT INFORMATION");

students.forEach((student) => {
    console.log(`Name: ${student.name} | Student ID: ${student.studentId} | Department: ${student.department}`);
    console.log(`Welcome, ${student.name}!`);
    
});

const totalStudents = students.length;
console.log(`Total Students: ${totalStudents}`);
