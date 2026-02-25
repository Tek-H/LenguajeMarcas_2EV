window.onscroll = updateProgressBar;

function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
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

