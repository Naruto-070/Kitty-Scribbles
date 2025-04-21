const toggle = document.getElementById('darkToggle');

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
}

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  if (isDark) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    enableDarkMode();
  }
});
