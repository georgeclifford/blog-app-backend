const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

HashGenerator = async (pass) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(pass, salt);
};

router.post("/register", async (req, res) => {
	let { data } = { data: req.body };
	let password = data.password;

	//     HashGenerator(password).then(
	//         (hashedPassword)=>{
	// data.password=hashedPassword
	// console.log(data)
	//     let load = new regsignupmodal(data)
	//     let result= load.save()
	//     res.json(
	//         {
	//         status:"success"
	//     })
	//         }
	//     )
	//or

	const hashedPassword = await HashGenerator(password);
	data.password = hashedPassword;
	let load = new userModel(data);

	let result = load.save();
	res.json({
		status: "success",
	});
});

router.get("/view", async (req, res) => {
	let data = await userModel.find();
	res.json(data);
});

module.exports = router;
