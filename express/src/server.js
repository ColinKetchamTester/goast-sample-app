const express = require('express');
const app = express();
const PORT = 3000;

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.put('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    if (!req.body.name || !req.body.age) {
        return res.status(400).send({ error: "Missing name or age in request body" });
    }

    if (userIndex !== -1) {
        users[userIndex].name = req.body.name;
        users[userIndex].age = req.body.age;

        res.json(users[userIndex]);
    } else {
        res.status(404).send({ error: "User not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});