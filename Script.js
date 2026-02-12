window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
}

document.getElementById("menButton").addEventListener("click", function() {
    const section = document.getElementById("men");
    section.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("womenButton").addEventListener("click", function() {
    const section = document.getElementById("women");
    section.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("childButton").addEventListener("click", function() {
    const section = document.getElementById("child");
    section.scrollIntoView({ behavior: "smooth" });
});