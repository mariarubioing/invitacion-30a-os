const seal = document.querySelector('.seal');
const invitation = document.querySelector('.invitation');
const tapText = document.getElementById('tap-text');
const envelope = document.querySelector('.envelope-wrapper');

seal.addEventListener('click', () => {
  // 1. Ocultar texto parpadeante
  tapText.style.display = 'none';

  // 2. Desvanecer sello
  seal.classList.add('fade-out');

  // 3. Esperar a que el sello desaparezca
  setTimeout(() => {
    seal.style.display = 'none';

    // ⭐ 4. PAUSA CINEMATOGRÁFICA antes de desvanecerse el sobre
    setTimeout(() => {
      envelope.classList.add('sobre-fade-out');

      // 5. Esperar a que el sobre termine de desvanecerse
      setTimeout(() => {
        envelope.style.display = 'none';

        // 6. Mostrar la invitación
        invitation.classList.remove('hidden');

        // 🔊 REPRODUCIR MÚSICA AQUÍ
        const musica = document.getElementById('musica');
        musica.volume = 0.6;
        musica.play();

      }, 800);

    }, 1600);

  }, 400);
});


// ---------------------------------------------------------
// ⏳ CUENTA ATRÁS (VA FUERA DEL EVENTO DEL SELLO)
// ---------------------------------------------------------

const targetDate = new Date("2026-09-12T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>¡Hoy es el gran día!</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);




