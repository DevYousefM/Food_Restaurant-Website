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

let menu = document.getElementById("menu"),
  menuFooter = document.getElementById("menuFooter");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.dataset.section) {
    document
      .getElementById(`${e.target.dataset.section}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
menuFooter.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.dataset.section) {
    document
      .getElementById(`${e.target.dataset.section}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

let scrollTop = document.querySelectorAll(".home");

scrollTop.forEach((ele) => {
  ele.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
