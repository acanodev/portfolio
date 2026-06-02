const app = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

const PORT = process.env.API_PORT || 3001;

app.get("/api", (req, res, next) => {
    res.status(200).json({
        active: true,
        message: "Hello world!"
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});