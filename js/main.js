// Variables
const hamburgerBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const myLink = document.getElementById("link-input");
const shortenBtn = document.getElementById("shorten-btn");
const errMsg = document.getElementById("errorMsg");
const regLinkExp =
  /^(https?:\/\/)?((([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?(\?[;&a-zA-Z0-9%_\+.~#=-]*)?(#[a-zA-Z0-9-_]*)?$/;

// Toggle function
function toggleMenu() {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
}

// Hide Toggled Menu When Resizing

function hideMenu() {
  if (window.innerWidth > 1024 && menu.className !== "hidden") {
    menu.classList.add("hidden");
    hamburgerBtn.classList.remove("open");
  }
}

// Check valid Links
function checkValidLinks() {
  errMsg.classList.remove("text-green-500");
  errMsg.classList.remove("text-red");
  myLink.classList.remove("border-red");
  myLink.classList.remove("border-emerald-500");

  if (myLink.value === "") {
    myLink.classList.add("border-red");
    errMsg.classList.add("text-red");
    errMsg.innerHTML = "Please write a url!";
  } else if (regLinkExp.test(myLink.value) === false) {
    myLink.classList.add("border-red");
    errMsg.classList.add("text-red");
    errMsg.innerHTML = "Please write a valid url!";
  } else {
    myLink.classList.add("border-emerald-500");
    errMsg.classList.add("text-green-500");
    errMsg.innerHTML = "URL shorten succefully!";
    myLink.value = "";
  }
}

// Call functions
hamburgerBtn.addEventListener("click", toggleMenu);
window.addEventListener("resize", hideMenu);
shortenBtn.addEventListener("click", checkValidLinks);
