const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();
// Build your routes here
const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
  };

const saySomething = (req, res) => {
	const dynamic = req.params.dynamic
	const result = `${dynamic}!`
	res.send(result)
}

app.get('/say/:dynamic', saySomething) 

app.get('/songs', (req, res) => {
	const title = req.query.title;
	res.send(title);
})
module.exports = app;
