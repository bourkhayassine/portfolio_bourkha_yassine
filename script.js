document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. Navigation dynamique (Smooth Scroll)
  ========================== */
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      
      // التأكد من أن الرابط يشير إلى ID داخلي
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    })
  });


  /* =========================
     2. Filtre projets (Recherche rapide)
  ========================== */
  const searchInput = document.getElementById("searchProject");
  const projects = document.querySelectorAll(".project-item");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase().trim();

      projects.forEach(project => {
        const text = project.textContent.toLowerCase();
        project.style.display = text.includes(value) ? "grid" : "none";
      });
    });
  }


  /* =========================
     3. Modale projet
  ========================== */
  document.addEventListener("DOMContentLoaded", () => {
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll(".open-modal");
const closeBtn = document.getElementById("closeModal");

const openModalFunc = () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  // Accessibility: Focus the close button when opened
  if (closeBtn) closeBtn.focus(); 
};

const closeModalFunc = () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
};

// Open listeners
openBtns.forEach(btn => btn.addEventListener("click", openModalFunc));

// Close listeners
if (closeBtn) closeBtn.addEventListener("click", closeModalFunc);

// Close on Backdrop Click
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFunc();
});

// Close on "Escape" Key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});



  /* =========================
     4. Formulaire contact
  ========================== */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!name || !email) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      alert("Message envoyé !");
      form.reset();
    });
  }


  /* =========================
     5. Gestion du Clavier (Echap)
  ========================== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModalFunc();
    }
  });

});
