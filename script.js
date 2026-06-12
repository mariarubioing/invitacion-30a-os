const seal = document.getElementById("seal");
const flap = document.querySelector(".flap");
const paper = document.getElementById("paper");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");
const music = document.getElementById("music");

seal.addEventListener("click", () => {
    flap.style.transform = "rotateX(-180deg)";
    paper.style.opacity = "1";

    setTimeout(() => {
        envelope.style.display = "none";
        invitation.classList.remove("hidden");
        music.play();
    }, 1500);
});

