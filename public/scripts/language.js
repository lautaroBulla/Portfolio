const englishButton = document.getElementById('englishButton');
const spanishButton = document.getElementById('spanishButton');

spanishButton.addEventListener('click', () => {

  if (window.location.pathname.includes('/es')) return;

  const newPath = window.location.pathname.replace(
    /^\/(en)/,
    '/es'
  )
  
  window.location.pathname = newPath;
})

englishButton.addEventListener('click', () => {

  if (window.location.pathname.includes('/en')) return;

  console.log(window.location.pathname);

  const newPath = window.location.pathname.replace(
    /^\/(es)/,
    '/en'
  )

  window.location.pathname = newPath;
})