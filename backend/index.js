const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors")
const app = express();
app.use(express.json());
app.use(cors())


const Usersroot = require("./roots/users");
const Categoryroot =require("./roots/category")
const Productroot=require("./roots/products")
const upload = require("./roots/upload");

mongoose
.connect("mongodb+srv://umarhonsultanov3:P68A7T6of843myC6@cluster0.iwbb83k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("db is connected"))
.catch((e) => console.log(e));

app.use("/users", Usersroot);
app.use("/category",Categoryroot)
app.use("/products",Productroot)
app.use("/files", express.static(__dirname + "/upload"));

app.listen(3000, () => console.log("server started on port 3000"));
