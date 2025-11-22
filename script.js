// ---------- System prompt ----------
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

CAPABILITIES:
1. Personalized recipe discovery:
   - Use ingredients the user has, and their dietary restrictions.
   - Suggest recipe options with estimated difficulty and total cooking time.
2. Step-by-step guidance:
   - Break recipes into numbered steps.
   - Offer approximate times and heat levels (e.g. medium-high).
   - Offer troubleshooting tips.
3. Portion scaling & unit conversion:
   - When user gives servings, scale ingredient quantities.
   - Convert between metric and imperial if requested.
4. Substitutions & constraints:
   - Suggest reasonable ingredient substitutions with tradeoffs.
   - Respect vegetarian / vegan / religious or allergy restrictions.
5. Real-time Q&A:
   - Answer precise questions about doneness, textures, temperatures, techniques, etc.
6. Dish photo analysis:
   - When the user sends a photo, describe what you see.
   - Comment on doneness, presentation, and potential mistakes.
   - Give clear suggestions for improvement next time.
7. Cookbook grounding:
   - If the user pastes content from a cookbook or PDF, treat that as the primary reference.
   - You may adapt, shorten, or scale the recipe, but keep core methods correct.

STYLE:
- Be concise but vivid.
- Motivate the user: highlight what they’re doing well and how to get better.
- Avoid heavy profanity. At most, very mild "kitchen banter" once in a while.
`;

// Basic chat history
const chatHistory = [];

const chatWindow = document.getElementById("chatWindow");
const userMessageEl = document.getElementById("userMessage");
const sendBtn = document.getElementById("sendBtn");
const generateImageBtn = document.getElementById("generateImageBtn");

const ingredientsInput = document.getElementById("ingredientsInput");
const dietInput = document.getElementById("dietInput");
const servingsInput = document.getElementById("servingsInput");
const imageInput = document.getElementById("imageInput");

const dishImageSection = document.getElementById("dishImageSection");
const dishImageEl = document.getElementById("dishImage");

// ---- init ----
document.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "system",
    "Tell me what you want to cook, what ingredients you have, and how many people you’re feeding. I’ll guide you step by step."
  );
});

sendBtn.addEventListener("click", handleUserMessage);
userMessageEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage();
  }
});
generateImageBtn.addEventListener("click", handleDishImageGeneration);

// ---- message rendering ----
function addMessage(role, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", role);

  const label = document.createElement("strong");
  if (role === "user") label.textContent = "You";
  else if (role === "assistant") label.textContent = "Chef";
  else label.textContent = "System";

  const body = document.createElement("div");
  body.innerText = text;

  msgDiv.appendChild(label);
  msgDiv.appendChild(body);
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ---- core: user message -> backend ----
async function handleUserMessage() {
  const userText = userMessageEl.value.trim();
  const ingredients = ingredientsInput.value.trim();
  const diet = dietInput.value.trim();
  const servings = servingsInput.value.trim();

  if (!userText && !ingredients && !diet) {
    alert("Tell the chef something – question, ingredients, or what you’re cooking.");
    return;
  }

  userMessageEl.value = "";

  let prompt = userText || "";
  if (ingredients) prompt += `\n\nIngredients I have: ${ingredients}`;
  if (diet) prompt += `\nDietary needs: ${diet}`;
  if (servings) prompt += `\nI want to cook for ${servings} servings.`;

  addMessage("user", prompt);
  chatHistory.push({ role: "user", content: prompt });

  // prepare messages to send to backend
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...chatHistory.map((m) => ({ role: m.role, content: m.content }))
  ];

  // (optional) include a base64 image in the last user content later if you want full vision via backend;
  // for now we keep photos only in text description or as future improvement.

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Chat API error:", err);
      addMessage("assistant", "Something went wrong on the server.");
      return;
    }

    const data = await res.json();
    const reply = data.reply || "(no reply)";
    addMessage("assistant", reply);
    chatHistory.push({ role: "assistant", content: reply });
  } catch (err) {
    console.error(err);
    addMessage("assistant", "Network error calling the chef backend.");
  }
}

// ---- dish image generation -> backend ----
async function handleDishImageGeneration() {
  // Use last assistant message as base description
  const lastAssistant = [...chatHistory].reverse().find((m) => m.role === "assistant");
  const lastUser = [...chatHistory].reverse().find((m) => m.role === "user");

  let description = "High-quality realistic photo of a nicely plated dish in restaurant style.";
  if (lastAssistant) {
    description = `High-quality realistic photo of the final dish described here: ${lastAssistant.content}`;
  } else if (lastUser) {
    description = `High-quality realistic photo of a dish based on this idea: ${lastUser.content}`;
  }

  addMessage("assistant", "Let me plate up a visual for you…");

  try {
    const res = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: description })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Image API error:", err);
      addMessage("assistant", "Couldn’t generate an image, something’s off on the server.");
      return;
    }

    const data = await res.json();
    if (data.imageUrl) {
      dishImageEl.src = data.imageUrl;
      dishImageSection.hidden = false;
    } else {
      addMessage("assistant", "Image API didn’t return a URL, sorry.");
    }
  } catch (err) {
    console.error(err);
    addMessage("assistant", "Network error calling image backend.");
  }
}
