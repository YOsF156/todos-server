require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

// app.use(cors({ cradentials: true, allowedHeaders: ["X-Requested-With"] }));
app.use(cookieParser())
app.use(cors({ credentials: true, origin: process.env.BASE_URL }))
app.use(express.json());
require("./DL/db").connect();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// app.use("/api/user", require("./Routes/userRouter"));
// app.use("/api/general", require("./Routes/generalRouter"));
app.use("/api/todo", require("./Routes/todoRouter"));



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
