const arrowRightButton = document.querySelector('#arrow-right-button');
const arrowRightSvg = document.querySelector('#arrow-right-svg');
const arrowLeftSvg = document.querySelector('#arrow-left-svg');
const asideMenu = document.querySelector('aside');
const mainContent = document.querySelector('main');

arrowRightSvg.addEventListener('click', () => {
  asideMenu.classList.add('open');
  mainContent.classList.add('filter');
  arrowRightSvg.classList.add('hidden');
  arrowLeftSvg.classList.remove('hidden');
});

arrowLeftSvg.addEventListener('click', () => {
  asideMenu.classList.remove('open');
  mainContent.classList.remove('filter');
  arrowLeftSvg.classList.add('hidden');
  arrowRightSvg.classList.remove('hidden');
});

const mediaQuery = window.matchMedia('(min-width: 768px)');

if (mediaQuery.matches) {
  asideMenu.classList.add('open');
  arrowRightSvg.classList.add('hidden');
  arrowLeftSvg.classList.remove('hidden');
}

mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    asideMenu.classList.add('open');
    arrowRightSvg.classList.add('hidden');
    arrowLeftSvg.classList.remove('hidden');
  } else {
    asideMenu.classList.remove('open');
    mainContent.classList.remove('filter');
    arrowLeftSvg.classList.add('hidden');
    arrowRightSvg.classList.remove('hidden');
  }
});