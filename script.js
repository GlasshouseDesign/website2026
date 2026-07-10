document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const logoTrack = document.getElementById("logo-track");
  if (logoTrack) {
    Array.from(logoTrack.children).forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("tabindex", "-1");
      logoTrack.appendChild(clone);
    });

    const setLoopDuration = () => {
      const pxPerSecond = 45;
      const setWidth = logoTrack.scrollWidth / 2;
      logoTrack.style.setProperty("--logo-scroll-duration", `${setWidth / pxPerSecond}s`);
    };

    const images = logoTrack.querySelectorAll("img");
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedCount += 1;
      } else {
        img.addEventListener("load", () => {
          loadedCount += 1;
          if (loadedCount === images.length) setLoopDuration();
        });
      }
    });
    if (loadedCount === images.length) setLoopDuration();
  }

  const floatingPill = document.querySelector(".floating-pill");
  if (floatingPill) {
    const revealPill = () => {
      floatingPill.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
    };
    revealPill();
    window.addEventListener("scroll", revealPill, { passive: true });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      const subject = encodeURIComponent(`Website enquiry from ${name || "your website"}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
      window.location.href = `mailto:hello@glasshouse.design?subject=${subject}&body=${body}`;
    });
  }
});
