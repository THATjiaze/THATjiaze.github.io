// ----- CONFIG -----
// Example SHA-256 for password "asdf" (change this for your own pass!)
const HASH = "f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b";

// ----- UTILITIES -----
async function sha256(s) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(d)).map(x => x.toString(16).padStart(2, "0")).join("");
}

// ----- ON LOAD -----
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gate-form");
  const gate = document.getElementById("gate");
  const content = document.getElementById("content");
  const yearSpan = document.getElementById("y");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Copy buttons (event delegation)
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".copy")) return;
    const target = document.querySelector(e.target.dataset.copy);
    if (!target) return;
    navigator.clipboard.writeText(target.innerText).then(() => {
      const old = e.target.textContent;
      e.target.textContent = "Copied ✓";
      setTimeout(() => (e.target.textContent = old), 1100);
    });
  });

  // Password gate
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("pw");
    const ok = input && (await sha256(input.value)) === HASH;
    if (ok) {
      gate.remove();
      content.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Wrong password");
    }
  });
});