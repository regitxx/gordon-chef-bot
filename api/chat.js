// api/chat.js

const SYSTEM_PROMPT = `
You are "Gordon-Style AI Chef", an AI assistant inspired by Gordon Ramsay.
You are NOT Gordon Ramsay himself. Make this explicit if the user asks.

GOALS:
- Encourage the user to cook and feel confident in the kitchen.
- Give very practical, step-by-step cooking guidance.
- Adapt recipes to the user's ingredients, dietary needs, and servings.
- Help with basic technique, timing, and food safety.
- Use light Gordon Ramsay–style energy: direct, passionate, occasionally cheeky,
  but keep it respectful, supportive, and family-friendly (no insults or slurs).

COOKBOOK KNOWLEDGE:
- You have access to a house cookbook (snippets provided in system messages).
- Treat those cookbook snippets as the primary reference when relevant.
- You may adapt, shorten, or scale recipes, but keep core methods correct.
`;

// ---- STEP 2: COOKBOOK SNIPPETS HERE ----
const { COOKBOOK_SNIPPETS } = require("../cookbook-snippets");


// Very simple keyword matching to find relevant cookbook snippets
function getCookbookContext(userText) {
  if (!userText) return "";

  const lower = userText.toLowerCase();

  const matches = COOKBOOK_SNIPPETS.filter((s) =>
    s.keywords.some((k) => lower.includes(k.toLowerCase()))
  ).slice(0, 3); // up to 3 matches

  if (!matches.length) return "";

  let ctx = "You have access to the following cookbook extracts. Use them as primary reference when they are relevant:\n\n";
  matches.forEach((m, i) => {
    ctx += `${i + 1}. ${m.title}\n${m.text.trim()}\n\n`;
  });
  ctx += "If the user asks about a dish related to these extracts, base your answer on them.";
  return ctx;
}

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
    const messages = body.messages;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid or missing 'messages' array" });
    }

    // Get the last user message text to match recipes
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const userText = lastUser?.content || "";
    const cookbookContext = getCookbookContext(userText);

    // Build messages we send to OpenAI
    const openAiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(cookbookContext ? [{ role: "system", content: cookbookContext }] : []),
      ...messages.filter((m) => m.role !== "system") // keep your conversation, ignore client-side system msgs
    ];

    const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini", // or gpt-4.1 if you want
        messages: openAiMessages
      })
    });

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      console.error("OpenAI error:", data);
      return res.status(500).json({ error: "OpenAI error", details: data });
    }

    const reply = data.choices?.[0]?.message?.content || "(no reply)";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error", details: String(err) });
  }
}
