// script.js

// ---------- Chat history (user + assistant) ----------
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

// ---------- Helpers ----------
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

// Read file as base64 (for future photo analysis)
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result || "";
      const base64 = result.toString().split(",")[1]; // strip data:... prefix
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "system",
    "Tell me what you want to cook, what ingredients you have, and how many people you’re feeding. I’ll guide you step by step."
  );
});

// ---------- Events ----------
sendBtn.addEventListener("click", () => handleUserMessage());
userMessageEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage();
  }
});

generateImageBtn.addEventListener("click", handleDishImageGeneration);

// ---------- Core: send message to /api/chat ----------
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

  let prompt = userText || "";
  if (ingredients) prompt += `\n\nIngredients I have: ${ingredients}`;
  if (diet) prompt += `\nDietary needs: ${diet}`;
  if (servings) prompt += `\nI want to cook for ${servings} servings.`;

  addMessage("user", prompt);
  chatHistory.push({ role: "user", content: prompt });

  // Optional: dish photo
  let imageBase64 = null;
  const file = imageInput.files && imageInput.files[0];
  if (file) {
    try {
      imageBase64 = await readFileAsBase64(file);
      // clear file input so next time we know it's a new photo
      imageInput.value = "";
      addMessage(
        "system",
        "Got your photo. I’ll factor how it looks into the feedback."
      );
    } catch (err) {
      console.error("Error reading image:", err);
      addMessage(
        "system",
        "I couldn't read that photo properly, but I’ll still help with the recipe."
      );
    }
  }

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: chatHistory,
        imageBase64, // may be null
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
  const lastAssistant = [...chatHistory].reverse().find((m) => m.role === "assistant");
  const lastUser = [...chatHistory].reverse().find((m) => m.role === "user");

  let description =
    "High-quality realistic photo of a beautifully plated cooked dish on a dark restaurant-style background.";

  if (lastAssistant) {
    description = `High-quality realistic photo of the final dish as described here: ${lastAssistant.content}`;
  } else if (lastUser) {
    description = `High-quality realistic photo of a dish based on this idea: ${lastUser.content}`;
  }

  addMessage("assistant", "Right, let me show you how it should look…");

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
        "Couldn’t generate an image – something’s off on the server or image model."
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
