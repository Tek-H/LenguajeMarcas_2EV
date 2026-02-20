document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("theme-toggle");
  const button2 = document.getElementById("theme-toggle2");

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      button.textContent = "☀︎︎";
    } else {
      button.textContent = "☾";
    }
  });

  button2.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      button.textContent = "☀︎︎";
    } else {
      button.textContent = "☾";
    }
  });
});