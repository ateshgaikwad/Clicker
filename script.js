let count = 0;

const btn = document.getElementById("countBtn");

btn.addEventListener("click", () => {
  count++;
    btn.textContent = `Clicked ${count} times`;
    });

