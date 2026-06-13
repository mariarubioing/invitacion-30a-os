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

    // ⭐ 4. PAUSA CINEMATOGRÁFICA antes de desvanecer el sobre
    setTimeout(() => {
      envelope.classList.add('sobre-fade-out');

      // 5. Esperar a que el sobre termine de desvanecerse
      setTimeout(() => {
        envelope.style.display = 'none';

        // 6. Mostrar la invitación
        invitation.classList.remove('hidden');
      }, 800); // duración del fade del sobre

    }, 1600); // ⭐ PAUSA CINEMATOGRÁFICA (1.6s)

  }, 400); // fade del sello
});

