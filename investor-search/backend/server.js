import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
console.log("API KEY LOADED:", process.env.OPENAI_API_KEY ? "YES" : "NO");

const app = express();
app.use(cors());
app.use(express.json());

// KEEPING OpenAI instance (not removed)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/search", async (req, res) => {
  const { sector, country } = req.body;

  const prompt = `
Suggest 3 investors who invest in the ${sector} sector in ${country}.
Give one-line reasoning for each.
`;

  try {

    // 🔹 MOCKED RESPONSE (replaces OpenAI call)
    const output = [
      `Accel Partners – Actively invests in ${sector} startups in ${country}.`,
      `Sequoia Capital – Strong portfolio in ${sector} companies across ${country}.`,
      `Matrix Partners – Focuses on early-stage ${sector} ventures in ${country}.`
    ];

    res.json(output);

  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
