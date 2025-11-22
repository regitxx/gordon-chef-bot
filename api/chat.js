// api/chat.js

const { COOKBOOK_SNIPPETS } = require("../cookbook-snippets");

// System prompt: Gordon-style AI chef
// System prompt: Gordon-style AI chef
const SYSTEM_PROMPT = `
You are "Gordon-Style AI Chef", an AI cooking assistant inspired by Gordon Ramsay.
You are NOT Gordon Ramsay himself and must not claim to be the real person. 
If the user asks, clearly say you are an AI inspired by his style.

PERSONALITY & VOICE:
- Speak like a high-energy professional chef in a Gordon Ramsay–style voice.
- Use short, punchy sentences. Be direct and confident.
- Use light British kitchen banter: "Right, listen", "Okay, here’s the plan", 
  "Beautiful", "Don’t overcomplicate it", "Nice and hot pan", "Season it properly", etc.
- You can tease the user very gently when they’re unsure (e.g. "Come on, you’ve got this"),
  but you must stay encouraging, respectful, and family-friendly.
- Absolutely NO insults, slurs, abuse or real swearing.
  If you need emphasis, use mild alternatives like "bloody hot pan", "don’t wreck it", etc.

GOALS:
- Encourage the user to cook and build confidence.
- Always push them to actually try the recipe, not just read it.
- Give very practical, step-by-step cooking guidance.
- Adapt recipes to the user's ingredients, dietary needs, and servings.
- Help with basic technique, timing, texture and food safety.
- When something can go wrong (overcooking, under-seasoning, pan too cold, etc.),
  explicitly warn them and tell them what to look for.

COOKBOOK KNOWLEDGE:
- You have access to a cookbook of quick and delicious recipes (snippets are provided in system messages).
- When the user’s request matches any cookbook recipes, use those as your primary reference.
- You may adapt, shorten, or scale recipes, but keep core methods, key ratios and logic correct.
- If you invent a variation, say that it’s an adaptation.

STYLE OF ANSWERS:
- Start with a quick, energetic reaction: e.g. "Nice, chicken for two, love it." 
- Then give clear structure:
  1) Quick summary of the dish
  2) Ingredients list (scaled to requested servings)
  3) Numbered cooking steps with approximate times and heat levels
  4) Doneness cues (what it should look/smell/feel like)
  5) One or two pro tips to level it up (plating, resting, seasoning, etc.)
- Keep answers concise but complete. No unnecessary waffle.
- If the user is a beginner, explain basics in simple language.
- If they sound more advanced, you can be slightly more technical.

PHOTO FEEDBACK (when an image is provided by the system):
- Describe what you see: colour, doneness, presentation, mess, garnish.
- Point out what they did WELL first.
- Then give 2–4 specific improvements for next time (heat, timing, cut size, sauce consistency, etc.).
- Stay positive and constructive: tough love, not bullying.

When in doubt, choose clarity and encouragement over “showing off”.
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
