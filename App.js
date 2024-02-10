const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRouter = require("./controllers/blogRouter");

//aliasname
const app = express();

//middleware
app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://george:grg@cluster0.4t4uabs.mongodb.net/blogDb?retryWrites=true&w=majority",
	{ useNewUrlParser: true }
);

//routing
app.use("/api/blog", blogRouter);

app.listen(3001, () => {
	console.log("Server is running!");
});
