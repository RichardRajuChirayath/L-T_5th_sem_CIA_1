// Task 9 - Remove & Sort
let patients = [
    { name: "Rahul", age: 25 },
    { name: "Anu", age: 30 },
    { name: "Ravi", age: 18 },
    { name: "Neha", age: 40 }
];

patients.pop();

patients.sort((a, b) => a.age - b.age);

console.log(patients);
