const { PORT = 5000 } = process.env
const morgan = require('morgan')
const app = require("./app")
app.use(morgan('dev'));

    const sayHello = (req, res) => {
        console.log(req.query);
        const name = req.query.name;
        const content = name ? `Hello, ${name}!` : "Hello!";
        res.send(content);
      };

app.get("/songs", (req, res) => {
  const title = req.query.title;
  res.send(title);
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`))