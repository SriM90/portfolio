const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  menuButton.closest(".navbar").classList.add("menu-ready");

  function setMenu(open) {
    navLinks.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      setMenu(false);
      menuButton.focus();
    }
  });

  window.matchMedia("(max-width: 600px)").addEventListener("change", () => {
    setMenu(false);
  });
}
const imageDialog = document.querySelector("#image-dialog");

if (imageDialog) {
  const fullImage = document.querySelector("#full-image");
  let lastImageButton;

  document.querySelectorAll(".project-images img").forEach((image) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "image-preview";
    button.setAttribute("aria-label", `Enlarge: ${image.alt}`);

    image.replaceWith(button);
    button.append(image);

    button.addEventListener("click", () => {
      lastImageButton = button;
      fullImage.src = image.src;
      fullImage.alt = image.alt;
      imageDialog.showModal();
    });
  });

  imageDialog.addEventListener("close", () => {
    if (lastImageButton) {
      lastImageButton.focus();
    }
  });
}