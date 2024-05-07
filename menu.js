<<<<<<< HEAD
document.getElementById("menu-burger").onclick = menuburger;
document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
document.getElementsByTagName("nav")[0].style.position = "absolute";
function menuburger() {
  console.log("burger");

  document.getElementsByTagName("nav")[0].style.right = 0 + "px";
  document.getElementById("closeBtn").style.display = "flex";
  document.getElementById("closeBtn").onclick = closeMenu;
  document.getElementById("closeBtn").style.position = "relative";
  document.getElementsByTagName("nav")[0].style.top =
    document.getElementsByTagName("header")[0].offsetTop +
    document.getElementsByTagName("header")[0].offsetHeight +
    "px";
}

function closeMenu(params) {
  console.log("close");
  document.getElementsByTagName("nav")[0].style.position = "none";
  document.getElementsByTagName("nav")[0].style.right =
    -2 * this.offsetWidth + "px";
}
=======
document.getElementById("menuBurger").onclick = menuBurger;
document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
document.getElementsByTagName("nav")[0].style.position = "absolute";
function menuBurger() {
  console.log("burger");

  document.getElementsByTagName("nav")[0].style.right = 0 + "px";
  document.getElementById("closeBtn").style.display = "flex";
  document.getElementById("closeBtn").onclick = closeMenu;
  document.getElementById("closeBtn").style.position = "relative";
  document.getElementsByTagName("nav")[0].style.top =
    document.getElementsByTagName("header")[0].offsetTop +
    document.getElementsByTagName("header")[0].offsetHeight +
    "px";
}

function closeMenu(params) {
  console.log("close");
  document.getElementsByTagName("nav")[0].style.position = "none";
  document.getElementsByTagName("nav")[0].style.right =
    -2 * this.offsetWidth + "px";
}
>>>>>>> ca608ed6c1b00423f2aa533a10856e4b4976d14e
