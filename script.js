const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

seal.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelope.style.display = "none";
    invitation.classList.remove("hidden");
  }, 1200);
});


