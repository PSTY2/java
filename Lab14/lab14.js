// Lab 14 Ц IIFE random (variant 9)
(() => {
  const rnd = Math.floor(Math.random() * 100) + 1;   // 1?100
  console.log("¬ипадкове число:", rnd);
  document.getElementById("out").textContent = rnd;
  return rnd;                // необов'€зково Ц просто демонстрац≥€
})();
