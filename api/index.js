import express from "express";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb+srv://Michal:test1@cluster0.vxluw.mongodb.net/");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema for the collection
// Define a model based on the schema
const PC = model("PC", new Schema({
  name: String,
}));

// Create an Express app
const app = express();
app.use(cors());
// Parse JSON request bodies
app.use(express.json());


app.get( "/", (req, res) => {
        console.log("server is running");
        res.json({ message:"OK" })
})


app.get("/characters", async (req, res) => {
        try {
          const characters = await PC.find();
          res.json(characters);
        } catch (error) {
          console.error("Error fetching characters:", error);
          res.status(500).json({ error: "Error fetching characters" });
        }
      });

app.listen(3000, () => {
        console.log("Server is running on port 3000");
});
