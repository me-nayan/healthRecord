import express from "express";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.get("/", (req, res) => {
    return res.send("");
});

export default app;
