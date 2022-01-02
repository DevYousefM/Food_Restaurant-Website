// jQuary Code

// JS Pure Code

let buttonAbearsOptions = document.querySelector(".cog i"),
  colorsChangerBox = document.querySelector(".colorChangerBox");

buttonAbearsOptions.addEventListener("click", () => {
  colorsChangerBox.classList.toggle("visible");
});

let colors = document.querySelectorAll(".color"),
  link = document.querySelectorAll("link")[2];

colors.forEach(function changeColor(color) {
  color.addEventListener("click", () => {
    console.log(color.dataset.theme);
    let colorTheme = color.dataset.theme;
    link.setAttribute("href", `css/${colorTheme}.css`);
  });
});

/*  Scroll To Top  */
let scrollBtn = document.querySelector(".scroll-btn");

scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (window.scrollY <= 400) {
    scrollBtn.style.display = "none";
  } else if (window.scrollY >= 400) {
    scrollBtn.style.display = "flex";
  }

  // Change Navbar Style Onscroll
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};
if (window.innerWidth > "800") {
  scrollBtn.remove();
} else {
  console.log("ElCaptain .Inc");
}

/* Scrolling To Sections */
let links = document.querySelectorAll(".linkNav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    let sec = document.getElementById(link.getAttribute("data-section"));
    sec.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    

    let offcanvas = document.querySelector(".offcanvas"),
      offcanvas_backdrop = document.querySelector(".offcanvas-backdrop");
    offcanvas.classList.remove("show");
    offcanvas_backdrop.remove();
  });
});
