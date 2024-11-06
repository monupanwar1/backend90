const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/todo-harkirat-2222");

const JWT_SECRET = "kunal@1234";

app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;

    try {
        await UserModel.create({
            email,
            password,
            name,
        });
        res.json({
            message: "User created successfully",
        });
    } catch (error) {
        res.status(400).json({
            message: "User already exists",
        });
    }
});

app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const findUser = await UserModel.findOne({
            email,
            password,
        });

        if (findUser) {
            const token = jwt.sign({ id: findUser._id.toString() }, JWT_SECRET);
            return res.json({
                token,
                message: "Signed in successfully",
            });
        } else {
            return res.status(403).json({
                message: "Invalid credentials",
            });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({
            message: "Error while signing in",
        });
    }
});

function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Token is missing or malformed",
        });
    }

    try {
        const decodeData = jwt.verify(token.split(" ")[1], JWT_SECRET);

        if (decodeData) {
            req.userId = decodeData.id;
            next();
        } else {
            res.status(403).json({
                message: "Invalid token",
            });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(401).json({
            message: "Invalid token",
        });
    }
}

app.post("/todos", auth, async (req, res) => {
    const { title, done } = req.body;
    const userId = req.userId;

    try {
        await TodoModel.create({
            userId,
            title,
            done,
        });
        res.status(201).json({
            message: "Todo created successfully",
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: "Error while creating todo",
        });
    }
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    try {
        const todos = await TodoModel.find({ userId });

        if (todos.length > 0) {
            res.status(200).json(todos);
        } else {
            res.json({
                message: "No todos found",
            });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: "Error while getting todos",
        });
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
