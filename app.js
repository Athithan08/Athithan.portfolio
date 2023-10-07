const expressLib = require("express");
const server = expressLib();
const resolvePath = require("path");
const mainRoutes = require("./routes/index");

server.set("view engine", "ejs");
server.set("views", resolvePath.join(__dirname, "views"));

server.use(expressLib.static(resolvePath.join(__dirname, "public")));

server.use("/", mainRoutes);

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const listener = server.listen(SERVER_PORT, () => {
  console.log(`Application started on http://localhost:${SERVER_PORT}`);
});

listener.on("error", (err) => {
  console.error("Error occurred:", err.message);
});
