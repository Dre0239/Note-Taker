const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./Routes/routeApi");
const htmlRoutes = require("./Routes/htmlRoute");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//require("./RouteFiles/API-route")(app);
//require("./RouteFiles/Html-routes")(app);

app.listen(PORT, function () {
  console.log("Application listening http://localhost:" + PORT);
});
