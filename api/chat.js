// api/chat.js

const { COOKBOOK_SNIPPETS } = require("../cookbook-snippets");

// System prompt: Gordon-style AI chef
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
- You have access to a cookbook of Gordon-style quick recipes (snippets provided in system messages).
- Treat those cookbook snippets as a primary reference when relevant.
- You may adapt, shorten, or scale recipes, but keep core methods correct.
`;

// Find relevant recipes from the cookbook based on user's last message
function getCookbookContext(userText) {
  if (!userText || typeof userText !== "string") return "";

  const lower = userText.toLowerCase();

  const matches = COOKBOOK_SNIPPETS.filter((recipe) => {
    if (!Array.isArray(recipe.keyIngredients)) return false;
    return recipe.keyIngredients.some((ing) =>
      lower.includes(String(ing).toLowerCase())
    );
  }).slice(0, 5); // up to 5 recipes

  if (!matches.length) return "";

  let ctx =
    "You have access to the following cookbook recipes. Use them as primary reference when they are relevant:\n\n";

  matches.forEach((r, i) => {
    ctx += `${i + 1}. ${r.title} (Chapter: ${r.chapter})\n`;
    ctx += `Key ingredients: ${r.keyIngredients.join(", ")}\n`;
    ctx += `Summary: ${r.summary}\n\n`;
  });

  ctx +=
    "When answering, if the user’s request matches any of these recipes, base your method and timings on them, adapting quantities to the requested servings.";
  return ctx;
}

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
    const messages = body.messages;

    if (!Array.isArray(messages)) {
      return res
        .status(400)
        .json({ error: "Invalid or missing 'messages' array in request body" });
    }

    // Find last user message text for recipe matching
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const userText =
      lastUser && typeof lastUser.content === "string"
        ? lastUser.content
        : "";

    const cookbookContext = getCookbookContext(userText);

    // Build messages to send to OpenAI
    const openAiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(cookbookContext ? [{ role: "system", content: cookbookContext }] : []),
      // keep conversation messages, but strip any client-side system messages
      ...messages.filter((m) => m.role !== "system"),
    ];

    const openAiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          // safer default that almost everyone has: gpt-4o-mini
          model: "gpt-4o-mini",
          messages: openAiMessages,
        }),
      }
    );

    const data = await openAiRes.json();

    if (!openAiRes.ok) {
      console.error("OpenAI error:", data);
      return res
        .status(500)
        .json({ error: "openai_error", details: data });
    }

    const reply =
      data.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn’t come up with anything.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Server error in /api/chat:", err);
    return res
      .status(500)
      .json({ error: "server_error", details: String(err) });
  }
};
