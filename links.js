function openLink(link) {
  window.location = "/pages/" + link + ".html";
}

function formAct() {
  event.preventDefault();
  console.log("form");
}
