const express = require("express");
const app = express();
const path = require("path");

app.use("/assets", express.static("public"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const api = require("./routers/apiRouters");
app.use(api);

app.listen(port, () => {
  console.log("server started on port: ", port);
});