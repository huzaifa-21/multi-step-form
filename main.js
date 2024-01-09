
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
      }, 100);
    }
  });
}

let form = document.querySelector(".form-area");
window.onload = () => {
  form.style.opacity = '1';
};

handleActive();

let textField = document.querySelector(".text-input");
let emailField = document.querySelector(".email-input");
let telField = document.querySelector(".tel-input");

let personChoice = {
  "text": '',
  "email": '',
  "tel": 0,
};
let keys = Object.keys(personChoice);

if (sessionStorage.getItem("choices") && textField && emailField && telField) {
  let choices = JSON.parse(sessionStorage.getItem("choices"));
  textField.value = choices["text"];
  emailField.value = choices["email"];
  telField.value = choices["tel"];
  personChoice["text"] = choices["text"];
  personChoice["email"] = choices["email"];
  personChoice["tel"] = choices["tel"];
}
if (textField && emailField && telField) {
  textField.oninput = () => {
    saveData(textField.value, "text");
  };
  emailField.oninput = () => {
    saveData(emailField.value, "email");
  };
  telField.oninput = () => {
    saveData(telField.value, "tel");
  };
}


function saveData(inputValue, type) {
  personChoice[type] = inputValue;
  sessionStorage.setItem("choices", JSON.stringify(personChoice));
}
// saveData()

