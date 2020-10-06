const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const indexRouter = require("./routes/index.js");

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Started server at port ${PORT}`));
