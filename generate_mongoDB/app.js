// app.js

const express = require("express");
const mongoose = require("mongoose");
const seedRoutes = require("./routes/seed");

const app = express();
const PORT = 3000;

// Kết nối MongoDB
const uri = "mongodb://127.0.0.1:27017/test_db";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

// Đăng ký route
app.use("/api", seedRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
