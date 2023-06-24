import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get( "/", (req, res) => {
        console.log("server is running");
        res.json({ message:"OK" })
})

app.listen(3000, () => {
        console.log("Server is running on port 3000");
});
