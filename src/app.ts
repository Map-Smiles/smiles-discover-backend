import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health-check", (req, res) => {
  return res.json({ message: "Hello Smiles Discover!" });
});

export default app;
