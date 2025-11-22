// script.js

// ---------- Chat history (just user + assistant) ----------
const chatHistory = [];

// ---------- DOM elements ----------
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

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "system",
    "Tell me what you want to cook, what ingredients you have, and how many people you’re feeding. I’ll guide you step by step."
  );
});

// ---------- Event listeners ----------
sendBtn.addEventListener("click", handleUserMessage);

userMessageEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage();
  }
});

generateImageBtn.addEventListener("click", handleDishImageGeneration);

// ---------- Render a message into the chat window ----------
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

// ---------- Handle sending message to backend (/api/chat) ----------
async function handleUserMessage() {
  const userText = userMessageEl.value.trim();
  const ingredients = ingredientsInput.value.trim();
  const diet = dietInput.value.trim();
  const servings = servingsInput.value.trim();

  if (!userText && !ingredients && !diet && !servings) {
    alert("Tell the chef something – question, ingredients, or what you’re cooking.");
    return;
  }

  userMessageEl.value = "";

  // Build combined user prompt
  let prompt = userText || "";
  if (ingredients) prompt += `\n\nIngredients I have: ${ingredients}`;
  if (diet) prompt += `\nDietary needs: ${diet}`;
  if (servings) prompt += `\nI want to cook for ${servings} servings.`;

  addMessage("user", prompt);
  chatHistory.push({ role: "user", content: prompt });

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // we only send user/assistant messages;
        // the server adds the system prompt and cookbook context
        messages: chatHistory,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Chat API error:", err);
      addMessage("assistant", "Something went wrong on the server.");
      return;
    }

    const data = await res.json();
    const reply = data.reply || "Sorry, I didn’t manage to reply.";
    addMessage("assistant", reply);
    chatHistory.push({ role: "assistant", content: reply });
  } catch (err) {
    console.error("Network error:", err);
    addMessage("assistant", "Network error talking to the chef backend.");
  }
}

// ---------- Generate final dish image via /api/image ----------
async function handleDishImageGeneration() {
  // Use last assistant or user message as the basis for description
  const lastAssistant = [...chatHistory].reverse().find((m) => m.role === "assistant");
  const lastUser = [...chatHistory].reverse().find((m) => m.role === "user");

  let description =
    "High-quality realistic photo of a nicely plated cooked dish, restaurant style.";

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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: description }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Image API error:", err);
      addMessage(
        "assistant",
        "Couldn’t generate an image, something’s off on the server."
      );
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
    console.error("Network error (image):", err);
    addMessage("assistant", "Network error while generating the dish image.");
  }
}
