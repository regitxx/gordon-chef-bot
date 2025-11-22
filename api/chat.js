// api/chat.js
import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY on server" });
  }

  const { messages } = req.body; // expect [{role, content}, ...]

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid or missing 'messages'" });
  }

  try {
    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      messages,
    });

    const answer = completion.choices?.[0]?.message?.content || "";

    res.status(200).json({ reply: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "OpenAI chat request failed" });
  }
}
