
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

(function(){
  function setHeaderOffset(){
    var header = document.querySelector('.site-header');
    if (!header) return;
    var h = header.offsetHeight || 64;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }
  window.addEventListener('load', setHeaderOffset);
  window.addEventListener('resize', setHeaderOffset);
  // Also recalc after fonts load (prevents jump on mobile)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setHeaderOffset);
  }
})();
