
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`nav a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active") + link.querySelector(".line").classList.remove("active"));
      if (link) {
        link.classList.add("active");
        link.querySelector(".line").classList.add("active");
        history.pushState(null, null, `#${id}`);
      }
    }
  });
}, {
  rootMargin: "-40% 0px -50% 0px",
  threshold: 0
});

sections.forEach(section => {
  observer.observe(section);
});
