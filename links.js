function openLink(link) {
  window.location = link + ".html";
}

function formAct() {
  event.preventDefault();
  console.log("form");
}

document.getElementById("scrollTop").onclick = scrollTop;

function scrollTop() {
  console.log("scroll");

  scrollTo(0, 0);
}

document.getElementById("link").onclick = postFunc;
document.getElementById("post").onclick = postFunc;
function postFunc(params) {
  console.log("post");
  window.open(
    "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrtdNbNzmPslqZknxNnVQqPDgDQpGssMhQbRxNVRdzvWvQgTSxTvQPvFCfTXSGwVkMCZL"
  );
}
document.getElementById("phoneCall").onclick = phoneCall;
function phoneCall() {
  location.href = "tel:80295536745";
}
