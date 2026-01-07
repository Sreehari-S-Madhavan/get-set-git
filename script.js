const quotes = [
  "git commit -m 'it works on my machine 😎'",
  "Bug found. Bug fixed. Bug reborn.",
  "Sleep is temporary. Commits are forever.",
  "One more commit and then I sleep. (Lie)",
  "Push first. Think later.",
  "If it works, don't touch it."
];

const btn = document.getElementById("funBtn");
const quoteText = document.getElementById("quote");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[random];
});
