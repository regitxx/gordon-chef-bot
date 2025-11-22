// api/image.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY on server" });
  }

  try {
    const body = req.body || {};
    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'prompt'" });
    }

    const imageRes = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt,
        n: 1,
        size: "1024x1024"
      })
    });

    const data = await imageRes.json();

    if (!imageRes.ok) {
      console.error("Image API error:", data);
      return res.status(500).json({ error: "Image API error", details: data });
    }

    const imageUrl = data.data?.[0]?.url || null;
    return res.status(200).json({ imageUrl });
  } catch (err) {
    console.error("Server error (image):", err);
    return res.status(500).json({ error: "Server error", details: String(err) });
  }
}
