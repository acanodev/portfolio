const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require('./middlewares/errors/errorHandler');
require("dotenv").config();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

const technologiesRoutes = require('./routes/TechnologyRoutes');
const projectRoutes = require('./routes/ProjectRoutes');

const PORT = process.env.API_PORT || 3001;

app.get("/api", (req, res, next) => {
    res.status(200).json({
        active: true,
        message: "Hello world!"
    });
});

app.use("/api/technologies", technologiesRoutes);
app.use("/api/projects", projectRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});