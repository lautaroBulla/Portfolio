const arrowRightButton = document.querySelector('#arrow-right-button');
const arrowRightSvg = document.querySelector('#arrow-right-svg');
const arrowLeftSvg = document.querySelector('#arrow-left-svg');
const asideMenu = document.querySelector('aside');

arrowRightSvg.addEventListener('click', () => {
  asideMenu.classList.add('open');
  arrowRightSvg.classList.add('hidden');
  arrowLeftSvg.classList.remove('hidden');
});

arrowLeftSvg.addEventListener('click', () => {
  asideMenu.classList.remove('open');
  asideMenu.classList.add('not-open');
  arrowLeftSvg.classList.add('hidden');
  arrowRightSvg.classList.remove('hidden');
});