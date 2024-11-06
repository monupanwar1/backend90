const express = require('express');
const jwt = require("jsonwebtoken");
const path = require('path');

const app = express();
app.use(express.json());

const users = [];
const todos = [];

const JWT_SECRET = "kunalpanwar123";

app.use(express.static(path.join(__dirname, 'public')));

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ message: "Username and password are required" });
    }

    if (username.length < 5) {
        return res.json({ message: "Username must be at least 5 characters" });
    }

    if (users.find((user) => user.username === username)) {
        return res.json({ message: "User already exists" });
    }

    users.push({ username, password });

    res.json({ message: "You are signed in successfully" });
});

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ message: "Username and password are required" });
    }

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ message: "You signed in successfully", token });
    } else {
        res.json({ message: "Invalid username or password" });
    }
});

function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({ message: "Token is missing" });
    }

    try {
        const decodeData = jwt.verify(token, JWT_SECRET);
        req.user = decodeData.username;  // Use req.user for consistency
        next();
    } catch (error) {
        res.json({ message: "Invalid token" });
    }
}

app.post("/todos", auth, (req, res) => {
    const { title } = req.body;
    const currentUser = req.user;

    if (!title) {
        return res.json({ message: "Title is missing" });
    }

    const newTodo = {
        id: todos.length + 1,
        username: currentUser,
        title,
        done: false,
    };

    todos.push(newTodo);

    res.json({ message: "Todo added successfully", todo: newTodo });
});

app.put("/todos/:id", auth, (req, res) => {  // Changed from POST to PUT
    const { id } = req.params;
    const { title } = req.body;
    const currentUser = req.user;

    const todo = todos.find((todo) => todo.id === parseInt(id) && todo.username === currentUser);

    if (!todo) {
        return res.json({ message: "Todo not found" });
    }

    if (!title) {
        return res.json({ message: "Title cannot be empty" });
    }

    todo.title = title;

    res.json({ message: "Todo updated successfully", todo });
});

app.delete("/todos/:id", auth, (req, res) => {
    const { id } = req.params;
    const currentUser = req.user;

    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id) && todo.username === currentUser);

    if (todoIndex === -1) {
        return res.json({ message: "Todo not found" });
    }

    todos.splice(todoIndex, 1);

    res.json({ message: "Todo deleted successfully" });
});

app.put("/todos/:id/done", auth, (req, res) => {
    const { id } = req.params;
    const currentUser = req.user;

    const todo = todos.find((todo) => todo.id === parseInt(id) && todo.username === currentUser);

    if (!todo) {
        return res.json({ message: "Todo not found" });
    }

    todo.done = !todo.done;

    res.json({ message: `To-Do marked as ${todo.done ? "done" : "undone"}.`, todo });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
