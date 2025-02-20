// Navbar berubah saat di-scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("fixed", "bg-white/35", "backdrop-blur-md", "shadow-md", "top-0", "left-0");
    } else {
      navbar.classList.remove("fixed", "bg-white/60", "backdrop-blur-md", "shadow-md");
    }
  });
  
  // Toggle menu hamburger
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  
  hamburger.addEventListener("click", function () {
    this.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
  
  // Tutup menu jika klik di luar
  window.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.add("hidden");
      hamburger.classList.remove("hamburger-active");
    }
  });
  
  // Tutup menu saat klik link (di layar kecil)
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        navMenu.classList.add("hidden");
        hamburger.classList.remove("hamburger-active");
      }
    });
  });
  