const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());


app.use((req, res, next) => {
    console.log("Request Method:", req.method);
    next();
});


let students = [
    { id: 1, name: "Arun", age: 20 },
    { id: 2, name: "Kumar", age: 22 }
];


app.get("/students", (req, res) => {
    res.json(students);
});


app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.json(student);
});


app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let student = students.find(s => s.id === id);

    if (!student) {
        return res.json({ message: "Not found" });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);
});


app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "Deleted successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});