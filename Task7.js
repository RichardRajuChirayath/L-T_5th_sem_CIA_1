// Task 7 - Skip or Stop Early
let patients = [
    { name: "Rahul", age: 25 },
    { name: "Anu", age: 15 },
    { name: "Ravi", age: 18 },
    { name: "Neha", age: 40 }
];

for (let patient of patients) {
    if (patient.age < 18)
        continue;

    console.log(patient.name, patient.age);
}
