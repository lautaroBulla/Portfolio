let darkMode = localStorage.getItem('darkMode');
const darkButton = document.getElementById('darkButton');
const lightButton = document.getElementById('lightButton');

enableDarkMode = () => {
  console.log('entre');
  document.body.classList.remove('light');
  document.body.classList.add('dark');
  darkButton.classList.add('hidden');
  lightButton.classList.remove('hidden');
  localStorage.setItem('darkMode', 'activate');
}
disableDarkMode = () => {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  lightButton.classList.add('hidden');
  darkButton.classList.remove('hidden');
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'activate') {
  enableDarkMode();
} else {
  disableDarkMode();
}


darkButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'activate') {
    enableDarkMode();
  }
});
lightButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode === 'activate') disableDarkMode();
})