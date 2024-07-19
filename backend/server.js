import express, { json } from "express";
import home from "./api/deleteUser.js";

const app = express();
app.use(json());

app.use("/home", home);

app.listen(9000, () => console.log("Listening to port"));
