// const { NODE_ENV = "development" } = process.env;
// const express = require("express");
// const app = express();
// 
// app.get("/say/:dynamic", (req, res) => {
// 	const dynamic = req.params.dynamic
// 	const result = `${dynamic}!!!`
// 	res.send(result)
// });
// 
// app.get("/say/goodbye", (req, res) => {
// 	res.send("sorry to see you go")
// })
// 
// 
// 
// app.get("/hello", (req, res) => {
// 	console.log(req.query)
// 	const name = req.query.name;
// 	const content = name ? `Hello, ${name}!` : "Hello, no name!";
// });
// 
// app.get('/songs', (req, res) => {
// 	const title = req.query.title;
// 	res.send(title);
// })
// module.exports = app;



const express = require("express");
// const morgan = require("morgan");
const app = express();

// Application-level middleware
// app.use(morgan("dev"));

// Route functions
const sayHello = (req, res, next) => {
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const sayGoodbye = (req, res, next) => {
  res.send("Sorry to see you go!");
};

const saySomething = (req, res, next) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

// Routes
app.get("/hello", sayHello);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/:greeting", saySomething);

module.exports = app;
