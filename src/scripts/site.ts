const root = document.documentElement;
const darkButton = document.querySelector<HTMLButtonElement>('#darkButton')!;
const lightButton = document.querySelector<HTMLButtonElement>('#lightButton')!;
function setTheme(dark: boolean) {
  const restoreFocus = document.activeElement === darkButton || document.activeElement === lightButton;
  root.classList.toggle('dark', dark);
  try { localStorage.setItem('darkMode', dark ? 'activate' : 'disabled'); } catch {}
  if (restoreFocus) (dark ? lightButton : darkButton).focus();
}
darkButton.addEventListener('click', () => setTheme(true));
lightButton.addEventListener('click', () => setTheme(false));

const toggle = document.querySelector<HTMLButtonElement>('#menu-toggle')!;
const aside = document.querySelector<HTMLElement>('#site-navigation')!;
const main = document.querySelector<HTMLElement>('main')!;
const backdrop = document.querySelector<HTMLElement>('.menu-backdrop')!;
const desktop = matchMedia('(min-width: 768px)');
let opened = false;
function setMenu(open: boolean, restoreFocus = false) {
  opened = open && !desktop.matches;
  aside.classList.toggle('open', opened);
  aside.inert = !desktop.matches && !opened;
  main.inert = opened;
  backdrop.hidden = !opened;
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.querySelector<HTMLElement>('.menu-text')!.textContent = (opened ? toggle.dataset.closeText : toggle.dataset.menuText)!;
  toggle.setAttribute('aria-label', (opened ? toggle.dataset.closeLabel : toggle.dataset.openLabel)!);
  document.body.style.overflow = opened ? 'hidden' : '';
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(!opened));
backdrop.addEventListener('click', () => setMenu(false, true));
desktop.addEventListener('change', () => {
  const focusInMenu = aside.contains(document.activeElement);
  const focusOnToggle = document.activeElement === toggle;
  setMenu(false);
  if (!desktop.matches && focusInMenu) toggle.focus();
  if (desktop.matches && focusOnToggle) aside.querySelector<HTMLAnchorElement>('a[href^="#"]')?.focus();
});
document.addEventListener('keydown', (event) => {
  if (!opened) return;
  if (event.key === 'Escape') { setMenu(false, true); return; }
  if (event.key !== 'Tab') return;
  const controls = [toggle, ...Array.from(aside.querySelectorAll<HTMLElement>('a, button')).filter(el => el.getClientRects().length)];
  const index = controls.indexOf(document.activeElement as HTMLElement);
  event.preventDefault();
  controls[(index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length].focus();
});
const links = Array.from(aside.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
links.forEach(link => link.addEventListener('click', () => {
  if (!desktop.matches) {
    setMenu(false);
    const section = document.querySelector<HTMLElement>(link.hash);
    section?.setAttribute('tabindex', '-1');
    section?.focus({ preventScroll: true });
  }
}));
setMenu(false);

const languageLink = aside.querySelector<HTMLAnchorElement>('.language-link')!;
const languagePath = languageLink.getAttribute('href')!;
const updateLanguageLink = () => { languageLink.href = languagePath + location.search + location.hash; };
updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    languageLink.href = languagePath + location.search + '#' + entry.target.id;
    links.forEach(link => {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      link.querySelector('.line')?.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
