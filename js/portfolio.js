//nav-start;
let home = document.querySelector(".nav_home").firstElementChild;
let about = document.querySelector(".nav_about").firstElementChild;
let services = document.querySelector(".nav_services").firstElementChild;
let skills = document.querySelector(".nav_skills").firstElementChild;
let education = document.querySelector(".nav_education").firstElementChild;
let experience = document.querySelector(".nav_experience").firstElementChild;
let project = document.querySelector(".nav_project").firstElementChild;
let contact = document.querySelector(".nav_contact").firstElementChild;

function hover_1() {
  home.style.borderBottom = "1px solid #ADEFD1FF";
  about.style.borderBottom = "none";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "none";
}

function hover_2() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "1px solid #ADEFD1FF";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "none";
}

function hover_3() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "none";
  services.style.borderBottom = "1px solid #ADEFD1FF";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "none";
}

function hover_4() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "none";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "1px solid #ADEFD1FF";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "none";
}

function hover_5() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "none";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "1px solid #ADEFD1FF";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "none";
}

function hover_6() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "none";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "1px solid #ADEFD1FF";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "none";
}

function hover_7() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "none";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "1px solid #ADEFD1FF";
  contact.style.borderBottom = "none";
}

function hover_8() {
  home.style.borderBottom = "none";
  about.style.borderBottom = "none";
  services.style.borderBottom = "none";
  skills.style.borderBottom = "none";
  education.style.borderBottom = "none";
  experience.style.borderBottom = "none";
  project.style.borderBottom = "none";
  contact.style.borderBottom = "1px solid #ADEFD1FF";
}

home.addEventListener("click", hover_1);
about.addEventListener("click", hover_2);
services.addEventListener("click", hover_3);
skills.addEventListener("click", hover_4);
education.addEventListener("click", hover_5);
experience.addEventListener("click", hover_6);
project.addEventListener("click", hover_7);
contact.addEventListener("click", hover_8);
//nav-end;

//slider-section-start;
let slider = document.querySelector(".sliders").children;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let indicator = document.querySelector(".indicator");

let slideIndex = 0;

setInterval(runSlider, 2500);
function runSlider() {
  if (slideIndex == slider.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active");
  }
  slider[slideIndex].classList.add("active");

  circleUpdate();
}

function prevSlider() {
  if (slideIndex == 0) {
    slideIndex = slider.length - 1;
  } else {
    slideIndex--;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active");
  }
  slider[slideIndex].classList.add("active");

  circleUpdate();
}

function nextSlider() {
  if (slideIndex == slider.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active");
  }
  slider[slideIndex].classList.add("active");

  circleUpdate();
}

prev.addEventListener("click", prevSlider);
next.addEventListener("click", nextSlider);

function circleIndicator() {
  for (let i = 0; i < slider.length; i++) {
    let newElement = document.createElement("div");
    if (i == 0) {
      newElement.className = "active";
    }
    indicator.appendChild(newElement);
  }
}
circleIndicator();

function circleUpdate() {
  for (let i = 0; i < slider.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[slideIndex].classList.add("active");
}
//slider-section-end;

//skills-section-start;
let photo = document.querySelector(".photoshop_bar");
let photoWidth = 0;
let photoStop = setInterval(photoshop, 50);
function photoshop() {
  photoWidth++;
  if (photoWidth == 55) {
    clearInterval(photoStop);
  } else {
    photo.style.width = photoWidth + "%";
  }
}

let phuPer = 0;
let phuPerStop = setInterval(per_1, 50);
function per_1() {
  phuPer++;
  if (phuPer == 51) {
    clearInterval(phuPerStop);
  } else {
    document.querySelector(".photoshop_percentage").innerText = phuPer + "%";
  }
}

let htm = document.querySelector(".html5_bar");
let htmWidth = 0;
let htmStop = setInterval(html_1, 50);
function html_1() {
  htmWidth++;
  if (htmWidth == 99) {
    clearInterval(htmStop);
  } else {
    htm.style.width = htmWidth + "%";
  }
}

let htyPer = 0;
let htyPerStop = setInterval(per_2, 50);
function per_2() {
  htyPer++;
  if (htyPer == 91) {
    clearInterval(htyPerStop);
  } else {
    document.querySelector(".html5_percentage").innerText = htyPer + "%";
  }
}

let cs = document.querySelector(".css3_bar");
let scWidth = 0;
let csStop = setInterval(cs_1, 50);
function cs_1() {
  scWidth++;
  if (scWidth == 88) {
    clearInterval(csStop);
  } else {
    cs.style.width = scWidth + "%";
  }
}

let csqPer = 0;
let csqPerStop = setInterval(per_3, 50);
function per_3() {
  csqPer++;
  if (csqPer == 81) {
    clearInterval(csqPerStop);
  } else {
    document.querySelector(".css3_percentage").innerText = csqPer + "%";
  }
}

let jav = document.querySelector(".javascript_bar");
let javWidth = 0;
let javStop = setInterval(jav_1, 50);
function jav_1() {
  javWidth++;
  if (javWidth == 77) {
    clearInterval(javStop);
  } else {
    jav.style.width = javWidth + "%";
  }
}

let javasPer = 0;
let javasPerStop = setInterval(per_4, 50);
function per_4() {
  javasPer++;
  if (javasPer == 71) {
    clearInterval(javasPerStop);
  } else {
    document.querySelector(".javascript_percentage").innerText = javasPer + "%";
  }
}

let digital = document.querySelector(".digital_marketing_bar");
let digitalWidth = 0;
let digitalStop = setInterval(digital_1, 50);
function digital_1() {
  digitalWidth++;
  if (digitalWidth == 55) {
    clearInterval(digitalStop);
  } else {
    digital.style.width = digitalWidth + "%";
  }
}

let digiPer = 0;
let digiPerStop = setInterval(per_5, 50);
function per_5() {
  digiPer++;
  if (digiPer == 51) {
    clearInterval(digiPerStop);
  } else {
    document.querySelector(".digital_marketing_percentage").innerText =
      digiPer + "%";
  }
}

let jqr = document.querySelector(".jquery_bar");
let jqrWidth = 0;
let jqrStop = setInterval(jqr_1, 50);
function jqr_1() {
  jqrWidth++;
  if (jqrWidth == 33) {
    clearInterval(jqrStop);
  } else {
    jqr.style.width = jqrWidth + "%";
  }
}

let jqrPer = 0;
let jqrPerStop = setInterval(per_6, 50);
function per_6() {
  jqrPer++;
  if (jqrPer == 31) {
    clearInterval(jqrPerStop);
  } else {
    document.querySelector(".jquery_percentage").innerText = jqrPer + "%";
  }
}
//skills-section-end;

//education-section-start;
let accoContainer = document.querySelector(".education_container").children;

for (let i = 0; i < accoContainer.length; i++) {
  let accHead = document.querySelectorAll(".accordion")[i].children[0];
  let accordionPara = document.querySelectorAll(".accordion")[i].children[1];

  function accordionShow() {
    accordionPara.classList.toggle("active");
  }

  accHead.addEventListener("click", accordionShow);
}

//education-section-end;

//project-section-start;
let all = document.querySelector(".all");
let hotel = document.querySelector(".hotel");
let ondesk = document.querySelector(".ondesk");
let onican = document.querySelector(".onican");
let sathi = document.querySelector(".sathi");
let portfolio = document.querySelector(".portfolio");
let mc_solution = document.querySelector(".mc_solution");

let container = document.querySelector(".project_container");
let only_hotel = document.querySelector(".hotel_only");
let only_ondesk = document.querySelector(".ondesk_only");
let only_onican = document.querySelector(".onican_only");
let only_sathi = document.querySelector(".sathi_only");
let only_portfolio = document.querySelector(".portfolio_only");
let only_mc_solution = document.querySelector(".mc_only");

function allProject() {
  container.style.display = "flex";
  only_hotel.style.display = "none";
  only_ondesk.style.display = "none";
  only_onican.style.display = "none";
  only_sathi.style.display = "none";
  only_portfolio.style.display = "none";
  only_mc_solution.style.display = "none";
}

function hotelProject() {
  container.style.display = "none";
  only_hotel.style.display = "block";
  only_ondesk.style.display = "none";
  only_onican.style.display = "none";
  only_sathi.style.display = "none";
  only_portfolio.style.display = "none";
  only_mc_solution.style.display = "none";
}

function ondeskProject() {
  container.style.display = "none";
  only_hotel.style.display = "none";
  only_ondesk.style.display = "block";
  only_onican.style.display = "none";
  only_sathi.style.display = "none";
  only_portfolio.style.display = "none";
  only_mc_solution.style.display = "none";
}

function onicanProject() {
  container.style.display = "none";
  only_hotel.style.display = "none";
  only_ondesk.style.display = "none";
  only_onican.style.display = "block";
  only_sathi.style.display = "none";
  only_portfolio.style.display = "none";
  only_mc_solution.style.display = "none";
}

function sathiProject() {
  container.style.display = "none";
  only_hotel.style.display = "none";
  only_ondesk.style.display = "none";
  only_onican.style.display = "none";
  only_sathi.style.display = "block";
  only_portfolio.style.display = "none";
  only_mc_solution.style.display = "none";
}

function portfolioProject() {
  container.style.display = "none";
  only_hotel.style.display = "none";
  only_ondesk.style.display = "none";
  only_onican.style.display = "none";
  only_sathi.style.display = "none";
  only_portfolio.style.display = "block";
  only_mc_solution.style.display = "none";
}

function mcProject() {
  container.style.display = "none";
  only_hotel.style.display = "none";
  only_ondesk.style.display = "none";
  only_onican.style.display = "none";
  only_sathi.style.display = "none";
  only_portfolio.style.display = "none";
  only_mc_solution.style.display = "block";
}

all.addEventListener("click", allProject);
hotel.addEventListener("click", hotelProject);
ondesk.addEventListener("click", ondeskProject);
onican.addEventListener("click", onicanProject);
sathi.addEventListener("click", sathiProject);
portfolio.addEventListener("click", portfolioProject);
mc_solution.addEventListener("click", mcProject);
//project-section-end;

//blog-section-start;
let blogSlider = document.querySelector(".blog_slider").children;
let blogIndicator = document.querySelector(".blog_indicator");
setInterval(blogShow, 5000);
let blogIndex = 0;

function blogShow() {
  if (blogIndex == blogSlider.length - 1) {
    blogIndex = 0;
  } else {
    blogIndex++;
  }
  for (let i = 0; i < blogSlider.length; i++) {
    blogSlider[i].classList.remove("active");
  }
  blogSlider[blogIndex].classList.add("active");

  blogCircleUpdate();
}

function blogCircle() {
  for (let i = 0; i < blogSlider.length; i++) {
    let blogNewElement = document.createElement("div");
    if (i == 0) {
      blogNewElement.className = "active";
    }
    blogIndicator.appendChild(blogNewElement);
  }
}
blogCircle();

function blogCircleUpdate() {
  for (let i = 0; i < blogSlider.length; i++) {
    blogIndicator.children[i].classList.remove("active");
  }
  blogIndicator.children[blogIndex].classList.add("active");
}
//blog-section-end;

//footer-section-start;

function validation() {
  //name validation;
  let name = document.getElementById("user_name").value;
  let name_check = /^[A-Za-z. ]{4,30}$/;
  if (name_check.test(name)) {
    document.getElementById("name_error").innerHTML = "";
  } else {
    document.getElementById("name_error").innerHTML =
      "**user name is invalid !";
    return false;
  }
  //email validation;
  let email = document.getElementById("user_email").value;
  let email_check = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (email_check.test(email)) {
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email_error").innerHTML =
      "** please fill the valid email id !";
    return false;
  }
  //number validation;
  let number = document.getElementById("user_phone").value;
  let number_check = /^\d{10}$/;
  if (number_check.test(number)) {
    document.getElementById("number_error").innerHTML = "";
  } else {
    document.getElementById("number_error").innerHTML =
      "** please fill the valid number !";
    return false;
  }

  //message validation;
  let message = document.getElementById("user_message").value;
  let message_check = /^[A-Za-z. ]{10,100}$/;
  if (message_check.test(message)) {
    document.getElementById("message_error").innerHTML = "";
  } else {
    document.getElementById("message_error").innerHTML =
      "** please text your message here !";
    return false;
  }
}
//footer-section-end;
