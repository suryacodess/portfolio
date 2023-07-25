const toggleTheme = document.querySelector("#toggle-theme-btn");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("ul li a");
const hire = document.querySelector("#hire-me");
const connect = document.querySelector("#connect-me");
const imgs = document.querySelectorAll(".img img");

const skilltabs = document.querySelectorAll(".skill-tab");

const projectTabs = document.querySelectorAll(".project-tab");
const projectTabsImgs = document.querySelectorAll(".project-tab .img img");

const projectLinksBtns = document.querySelectorAll(".btn");
const projectLinks = document.querySelectorAll(".btn a");

const contactInputs = document.querySelectorAll("input");
const contactTextarea = document.querySelector("textarea");
const messageBtn = document.querySelector(".message-btn button");
const contactEmail = document.querySelector(".contact-email h1 a");
const contactSvgs = document.querySelectorAll("svg");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("theme");

  header.classList.toggle("theme");
  hire.classList.toggle("button-theme");
  connect.classList.toggle("button-theme");
  toggleTheme.classList.toggle("toggle-light-theme");

  navLinks.forEach((link) => {
    link.classList.toggle("text-black");
  });

  skilltabs.forEach((tab) => {
    tab.classList.toggle("button-theme");
  });

  imgs.forEach((img) => {
    img.classList.toggle("img-theme");
  });

  projectTabs.forEach((tab) => {
    tab.classList.toggle("button-theme");
  });

  projectTabsImgs.forEach((img) => {
    img.classList.toggle("project-img-theme");
  });

  projectLinksBtns.forEach((btn) => {
    btn.classList.toggle("color-black");
  });

  projectLinks.forEach((link) => {
    link.classList.toggle("text-black");
  });

  contactInputs.forEach((input) => {
    input.classList.toggle("contact-border");
  });
  contactTextarea.classList.toggle("contact-border");
  messageBtn.classList.toggle("contact-btn-theme");
  contactEmail.classList.toggle("text-black");

  contactSvgs.forEach((svg) => {
    svg.classList.toggle("svg-black");
  });
});

////////////////////////////////////////////////

// gsap.to(".img10", { opacity: 0, duration: 1 });

// gsap.to(".img10", { opacity: 0, duration: 1, });
// gsap.to(".img9", { opacity: 0, duration: 2 });
// gsap.to(".img8", { opacity: 0, duration: 3 });
// gsap.to(".img7", { opacity: 0, duration: 4 });
// gsap.to(".img6", { opacity: 0, duration: 5 });
// gsap.to(".img5", { opacity: 0, duration: 6 });
// gsap.to(".img4", { opacity: 0, duration: 7 });
// gsap.to(".img3", { opacity: 0, duration: 8 });
// gsap.to(".img2", { opacity: 0, duration: 9 });
// gsap.to(".img1", { opacity: 0, duration: 10 });

// let t1 = gsap.timeline();
// t1.to(".img10", { display: "none", duration: 1 });
// t1.to(".img9", { display: "none", duration: 1 });
// t1.to(".img8", { display: "none", duration: 1 });
// t1.to(".img7", { display: "none", duration: 1 });
// t1.to(".img6", { display: "none", duration: 1 });
// t1.to(".img5", { display: "none", duration: 1 });
// t1.to(".img4", { display: "none", duration: 1 });
// t1.to(".img3", { display: "none", duration: 1 });
// t1.to(".img2", { display: "none", duration: 1 });
// // t1.to(".img1", { display: "none", duration: 1 });

// t1.repeat(-1);
