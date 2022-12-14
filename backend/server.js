const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/DB");
// const bp = require("body-parser");
const { errHandler } = require("./middleware/errorMiddleware");
connectDB();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));
app.use(errHandler);
app.use("/api/goals", require("./routes/goalroute"));
app.listen(port, () => console.log(`server started on port ${port}`));
