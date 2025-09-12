
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const label = document.getElementById('themeLabel');
  // theme persistence
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ root.classList.add('light'); if(label) label.textContent = 'Light'; }
  btn && btn.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if(label) label.textContent = isLight ? 'Light' : 'Dark';
  });
})();
