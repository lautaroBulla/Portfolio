const arrowRightButton = document.getElementById('arrow-right');
const arrowLeftButton = document.getElementById('arrow-left');
const asideMenu = document.querySelector('aside');

arrowRightButton.addEventListener('click', () => {
  asideMenu.classList.add('open');
  arrowRightButton.classList.add('hidden');
  arrowLeftButton.classList.remove('hidden');
});

arrowLeftButton.addEventListener('click', () => {
  asideMenu.classList.remove('open');
  arrowLeftButton.classList.add('hidden');
  arrowRightButton.classList.remove('hidden');
});