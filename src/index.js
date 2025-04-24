import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.config.js";

dotenv.config({ path: ".env" });


const port = process.env.PORT || 3000

connectDB()
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})