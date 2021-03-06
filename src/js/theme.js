//изменение темы
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');
const REPOSITORY = 'light-theme';
const savedTheme = localStorage.getItem(REPOSITORY);

body.classList.add(theme.LIGHT);
checkbox.addEventListener('change', onSwitchThemeclick);

if (savedTheme === '') {
  body.classList.add(theme.LIGHT);
}
if (savedTheme === 'false') {
  body.classList.remove(theme.LIGHT);
  body.classList.add(theme.DARK);
  checkbox.checked = true;
}

function onSwitchThemeclick() {
  body.classList.toggle(theme.LIGHT);
  body.classList.toggle(theme.DARK);

  const lightTheme = body.classList.contains(theme.LIGHT);
  localStorage.setItem(REPOSITORY, lightTheme);
}