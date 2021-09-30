const currIMG = document.getElementById("imgOBJ");

const images = ["1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg"];
let count = 1;

//currIMG.style["backgroundImage"] = `url("./res/images/${images[count++ % 5]}")`;
if (currIMG)
  currIMG.style["animation"] = `slowSlide 10000ms linear 0ms infinite forwards`;

setInterval(() => {
  currIMG.style["animation"] = `slowSlide 10000ms linear 0ms infinite forwards`;
  currIMG.style["backgroundImage"] = `url("./res/images/${
    images[count++ % 5]
  }")`;
}, 10000);

const deskNav = document.getElementById("deskNav");
const mobileNav = document.getElementById("mobileNav");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    deskNav.style["background"] = "white";
    deskNav.style["color"] = "black";
    openBtn.style["color"] = "black";
    closeBtn.style["color"] = "black";
    mobileNav.style["color"] = "black";
    deskNav.style["boxShadow"] = "0px 2px 20px #00000026";
  } else {
    deskNav.style["background"] = "unset";
    deskNav.style["color"] = "white";
    openBtn.style["color"] = "white";
    closeBtn.style["color"] = "white";
    mobileNav.style["color"] = "white";
    deskNav.style["boxShadow"] = "unset";
  }
});

observer.observe(document.getElementById("hero"));

function navHandle(val) {
  if (val) {
    mobileNav.style["transform"] = "unset";
    openBtn.style["display"] = "none";
  } else {
    mobileNav.style["transform"] = "translateX(-100%)";
    openBtn.style["display"] = "block";
  }
}

function discord() {
  const a = document.createElement("a");
  a.setAttribute("href", "https://discord.gg/K8EB9rJekG");
  a.setAttribute("target", "blank");
  a.click();
}
