import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";

import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/user.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); 

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
