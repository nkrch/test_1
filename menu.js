document.getElementById("menuBurger").onclick = menuBurger;

function menuBurger() {
  console.log("burger");
  document.getElementsByTagName("nav")[0].style.position = "absolute";
  document.getElementsByTagName("nav")[0].style.right = 120 + "px";
  document.getElementById("closeBtn").style.display = "flex";
  document.getElementById("closeBtn").onclick = closeMenu;
  document.getElementById("closeBtn").style.position = "relative";
}

function closeMenu(params) {
  console.log("close");
  document.getElementsByTagName("nav")[0].style.position = "none";
  document.getElementsByTagName("nav")[0].style.right =
    -15 - this.offsetWidth + "px";
}
