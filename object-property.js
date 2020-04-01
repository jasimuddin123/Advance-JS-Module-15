
const students = [
    {id: 22, name: "Jasim Uddin"},
    {id: 30, name: "Kamal Hossain"},
    {id: 40, name: "Farouk Hossain"},
    {id: 20, name: "Sona Bonddu"},

];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);

console.log(names);

console.log(ids);

// Obeject property Using " Filter"


const students = [
    {id: 22, name: "Jasim Uddin"},
    {id: 30, name: "Kamal Hossain"},
    {id: 40, name: "Farouk Hossain"},
    {id: 20, name: "Sona Bonddu"},

];

const bigger = students.filter(s => s.id > 20);

console.log(bigger);