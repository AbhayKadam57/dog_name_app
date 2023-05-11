import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors({ origin: "http://localhost:5173/" }));
app.use(express.json());

app.get("/api/get-random-dog", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");

    res.status(200).json(response.data.message);
  } catch (e) {
    res.status(500).json("Something went wrong...");
  }
});

app.post("/api/get-image-by-breed/:breed", async (req, res) => {
  const breed = req.params.breed;

  try {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );

    res.status(200).json(response.data.message);
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log("server is staerted at" + PORT);
});
