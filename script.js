// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const zoomImages = document.querySelectorAll(".cs-image-group img");

  zoomImages.forEach((image) => {
      let zoomedImage;

      image.addEventListener("mouseover", () => {
          zoomedImage = document.createElement("img");
          zoomedImage.src = image.src;
          zoomedImage.classList.add("zoomed-image");
          zoomedImage.style.position = "fixed";
          zoomedImage.style.top = "50%";
          zoomedImage.style.left = "50%";
          zoomedImage.style.transform = "translate(-50%, -50%) scale(0.39)";
          zoomedImage.style.zIndex = "1000";
          zoomedImage.style.pointerEvents = "none"; // To prevent the zoomed image from intercepting mouse events
          document.body.appendChild(zoomedImage);
      });

      image.addEventListener("mouseout", () => {
          if (zoomedImage) {
              document.body.removeChild(zoomedImage);
              zoomedImage = null;
          }
      });
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const nav = document.querySelector('.cs-nav');
const promotions = document.getElementById('promotions-1569');
const contact = document.getElementById('contact-1150');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
  promotions.classList.toggle('dark-mode');
  contact.classList.toggle('dark-mode');

  // Optionally, save the user's preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Load the saved preference from localStorage, if any
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
  footer.classList.add('dark-mode');
  nav.classList.add('dark-mode');
  promotions.classList.add('dark-mode');
  contact.classList.add('dark-mode');
}
// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            