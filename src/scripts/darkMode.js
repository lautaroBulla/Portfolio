let darkMode = localStorage.getItem('darkMode');
const darkButton = document.getElementById('darkButton');
const lightButton = document.getElementById('lightButton');

enableDarkMode = () => {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
  darkButton.style.display = 'none';
  lightButton.style.display = 'block';
  localStorage.setItem('darkMode', 'activate');
}
disableDarkMode = () => {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  lightButton.style.display = 'none';
  darkButton.style.display = 'block';
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'activate') {
  enableDarkMode();
} else {
  disableDarkMode();
}


darkButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'activate') enableDarkMode();
});
lightButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode === 'activate') disableDarkMode();
})