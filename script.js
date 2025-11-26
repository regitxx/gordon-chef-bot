// ---------- Chat history (user + assistant) ----------
const chatHistory = [];

// ---------- DOM elements ----------
const chatWindow = document.getElementById("chatWindow");
const userMessageEl = document.getElementById("userMessage");
const sendBtn = document.getElementById("sendBtn");

const ingredientsInput = document.getElementById("ingredientsInput");
const dietInput = document.getElementById("dietInput");
const servingsInput = document.getElementById("servingsInput");

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

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: chatHistory,
      }),
    });

    if (!res.ok) {
      // Try to log details to the console so you can see Vercel error shape
      let errJson = {};
      try {
        errJson = await res.json();
      } catch (e) {
        // ignore parse error
      }
      console.error("Chat API error:", errJson);
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
