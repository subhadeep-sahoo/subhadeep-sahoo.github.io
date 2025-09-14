
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

(function(){
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  if(!btn || !nav) return;

  function toggleMenu(){
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  nav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if(!nav.contains(e.target) && e.target !== btn) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Dropdown toggle (desktop click + mobile tap)
(function(){
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;

  const btn = dropdown.querySelector('.dropbtn');
  const menu = dropdown.querySelector('.dropdown-menu');

  function toggle(e){
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  // Click to toggle (works on both desktop & mobile)
  btn.addEventListener('click', toggle);

  // Close when clicking a menu item
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when clicking outside (mobile/desktop)
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

