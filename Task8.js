// Task 8 - Add & Find
let patients = [
    { name: "Rahul", age: 25 },
    { name: "Anu", age: 30 },
    { name: "Ravi", age: 18 }
];

patients.push({ name: "Neha", age: 40 });

let oldest = patients[0];

for (let patient of patients) {
    if (patient.age > oldest.age)
        oldest = patient;
}

console.log(oldest);
