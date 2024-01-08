
let pages = ["step-1.html", "step-2.html", "step-3.html", "step-4.html"];

function handleActive() {
  let links = document.querySelectorAll('.steps > div');
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    // this if condition to get the site name to compare it with active page 
    if (window.location.href.slice(-11,) == `${link.className}.html`) {
      setTimeout(() => {
        link.classList.add("active");
      }, 200);
    }
  });
}

let prev = document.querySelector(".prev");


handleActive()


