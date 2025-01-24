/** @format */
document.addEventListener("DOMContentLoaded", function () {
  // Array with texts to type in typewriter
  const dataText = [
    "Full Stack .NET Web Developer",
    "Front End Developer | Angular 2+",
    "Freelancer",
    "Software Engineer",
  ];

  // Function to type one text in the typewriter
  function typeWriter(text, charIndex, callback) {
    if (charIndex < text.length) {
      // Add next character to the .writer element
      const writerElement = document.querySelector(".writer");
      writerElement.innerHTML =
        text.substring(0, charIndex + 1) + '<span aria-hidden="true"></span>';

      // Wait and call this function for the next character
      setTimeout(() => {
        typeWriter(text, charIndex + 1, callback);
      }, 100);
    } else if (typeof callback === "function") {
      // Call the callback after a delay
      setTimeout(callback, 700);
    }
  }

  // Function to start the typewriter animation for texts in the array
  function startTextAnimation(index) {
    if (index < dataText.length) {
      typeWriter(dataText[index], 0, () => {
        // Start the next text after the current one finishes
        startTextAnimation(index + 1);
      });
    } else {
      // Restart animation from the beginning after all texts
      setTimeout(() => {
        startTextAnimation(0);
      }, 2000);
    }
  }

  // Start the text animation
  startTextAnimation(0);
});

// !Start A VanillaTilt Plugins
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 25,
  speed: 400,
  scale: 1.1,
});

// ! Make a PopUp To A Lastest News Photos.
let img = document.querySelectorAll(".projects .photo img");
img.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.className = "popup-overlay";

    let popUp = document.createElement("div");
    popUp.className = "popUp";

    let popUpImg = document.createElement("img");
    popUpImg.src = ele.src;

    div.addEventListener("click", function () {
      popUp.remove();
      div.remove();
    });

    document.body.appendChild(popUp);
    document.body.appendChild(div);
    popUp.appendChild(popUpImg);
  });
});

// !Listen to the scroll event
window.addEventListener("scroll", function () {
  const blocks = document.querySelectorAll(".block");
  const navbarLinks = document.querySelectorAll(".nav-links a");

  let lastBlockActivated = false;

  blocks.forEach(function (block, index) {
    if (window.scrollY >= block.offsetTop - window.innerHeight / 2) {
      const blockID = block.id;

      navbarLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.nav-links a[data-scroll='${blockID}']`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }

      lastBlockActivated = index === blocks.length - 1;
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navbarLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    const lastLink = document.querySelector(".nav-links li:last-of-type a");
    if (lastLink) {
      lastLink.classList.add("active");
    }
  }
});
