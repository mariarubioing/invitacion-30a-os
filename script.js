const seal = document.getElementById("seal");
const flap = document.querySelector(".flap");
const paper = document.getElementById("paper");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");
const music = document.getElementById("music");

seal.addEventListener("click", () => {
    // Abrir solapa
    flap.style.transform = "rotateX(-180deg)";

    // Sacar la carta
    setTimeout(() => {
        paper.style.opacity = "1";
        paper.style.transform = "translateY(-140px)";
    }, 800);

    // Mostrar invitación
    setTimeout(() => {
        envelope.style.display = "none";
        invitation.classList.remove("hidden");
        music.play();
    }, 2000);
});
