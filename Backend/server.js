const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("💘 LoveConnect Backend is running...");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
