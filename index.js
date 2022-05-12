const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World! This is BackEnd server.")
});

app.get("/api/v1", (req, res) => {
	res.json({
		"users": [
			{
				"id": 1,
				"name": "Leanne Graham",
				"email": "Sincere@april.biz",
				"phone": "1-770-736-8031 x56442",
			},
			{
				"id": 2,
				"name": "Ervin Howell",
				"email": "Shanna@melissa.tv",
				"phone": "010-692-6593 x09125",
			},
			{
				"id": 3,
				"name": "Clementine Bauch",
				"email": "Nathan@yesenia.net",
				"phone": "1-463-123-4447",
			},
		],
	})
});

app.listen(5000, () => {
	console.log("Listen port 5000");
});
