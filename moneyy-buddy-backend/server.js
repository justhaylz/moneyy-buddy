// This file serves as the entry point for the Moneyy Buddy backend application
// It sets up the server, connects to the database, and configures routes.

// Importing necessary modules
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import connectDB from "./config/db.js"

// Load environment variables and connect to the database
dotenv.config()
// Connect to the database
connectDB()

// Importing necessary modules
const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())

// Importing routes
import authRoutes from "./routes/authRoutes.js"
import financeRoutes from "./routes/financeRoutes.js"
import aiRoutes from "./routes/aiRoutes.js";


// Using the imported routes
app.use("/api/auth", authRoutes)
app.use("/api/finance", financeRoutes)
app.use("/api/ai", aiRoutes);

// Starting the server
const PORT = process.env.PORT || 5000
// Listening on the specified port
app.listen(PORT, () => console.log(`Server running on ${PORT}`))