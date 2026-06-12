const seal = document.querySelector('.seal');
const invitation = document.querySelector('.invitation');

seal.addEventListener('click', () => {
  seal.style.opacity = '0';
  invitation.classList.remove('hidden');
});

