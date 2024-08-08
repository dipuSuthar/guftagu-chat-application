const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const useRoutes = require("./routes/useRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middelware/errorMiddelware");
dotenv.config(); // Load environment variables

connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // To accept JSON Data

app.use("/api/user", useRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
