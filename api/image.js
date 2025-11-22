// api/image.js

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "Missing OPENAI_API_KEY on server (Vercel env var)" });
  }

  try {
    const body = req.body || {};
    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string") {
      return res
        .status(400)
        .json({ error: "Missing or invalid 'prompt' in request body" });
    }

    const openAiRes = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1", // if your account doesn't support this, change to "dall-e-3"
          prompt,
          n: 1,
          size: "1024x1024",
        }),
      }
    );

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      console.error("Image API error:", data);
      return res
        .status(500)
        .json({ error: "image_api_error", details: data });
    }

    const imageUrl = data.data && data.data[0] && data.data[0].url;

    if (!imageUrl) {
      return res
        .status(500)
        .json({ error: "no_image_url_returned", raw: data });
    }

    return res.status(200).json({ imageUrl });
  } catch (err) {
    console.error("Server error in /api/image:", err);
    return res
      .status(500)
      .json({ error: "server_error", details: String(err) });
  }
};
