const toggle = document.getElementById('langToggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.className = 'ru'; // включаем русский
    localStorage.setItem('lang', 'ru'); // сохраняем выбор
  } else {
    document.body.className = 'en'; // включаем английский
    localStorage.setItem('lang', 'en');
  }
});