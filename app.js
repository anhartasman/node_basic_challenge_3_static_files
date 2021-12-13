const express = required("express");
const path = required("path");

const app = express();

const userRoutes = require("./routes/user");
const publicRoutes = require("./routes/public");

app.use(express.static(path.join(__dirname, "public"))); // Membuat folder public bisa diakses publik

app.use(userRoutes);
app.use(publicRoutes);

app.listen(3000);
