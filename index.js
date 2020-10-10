const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const indexRouter = require("./routes/index.js");
const logger = require('morgan')

app.set("view engine", "hbs");
app.engine("hbs", handlebars({
    layoutsDir: __dirname+'/views/layouts',
    extname:'hbs'
}));

app.use(express.static("public"));

app.use(logger('dev'))

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Started server at port ${PORT}`));
