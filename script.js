document.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("page-loaded");

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {

      navLinks.forEach(item => {
        item.classList.remove("active");
      });

      this.classList.add("active");

    });
  });


  const sections = document.querySelectorAll(
    ".Welcome, .Profile, .Project, .Contact"
  );

  const updateActiveNav = () => {

    let currentSection = "home";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 180;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionBottom
      ) {
        currentSection = section.id;
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }

    });

  };

  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();


  const progress = document.querySelector(".scroll-progress");

  if (progress) {

    const updateProgress = () => {

      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        height > 0 ? (scrollTop / height) * 100 : 0;

      progress.style.width = percentage + "%";

    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

  }


  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }

    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  }


  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach(card => {

    card.addEventListener("click", () => {

      skillCards.forEach(item => {
        item.classList.remove("selected");
      });

      card.classList.add("selected");

    });

  });


  const contactCards = document.querySelectorAll(".contact-card");

  contactCards.forEach(card => {

    card.addEventListener("click", () => {

      card.classList.add("clicked");

      setTimeout(() => {
        card.classList.remove("clicked");
      }, 180);

    });

  });

});