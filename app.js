const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

function updateCounts() {
  const text = textInput.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const chars = text.length;

  wordCount.textContent = words;
  charCount.textContent = chars;
}

textInput.addEventListener("input", updateCounts);
