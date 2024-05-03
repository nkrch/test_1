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

if (document.getElementById("link") != null) {
  document.getElementById("link").onclick = postFunc;
}

if (document.getElementById("post") != null) {
  document.getElementById("post").onclick = postFunc;
}

function postFunc(params) {
  console.log("post");
  window.open(
    "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrtdNbNzmPslqZknxNnVQqPDgDQpGssMhQbRxNVRdzvWvQgTSxTvQPvFCfTXSGwVkMCZL"
  );
}

if (document.getElementById("phoneCall") != null) {
  document.getElementById("phoneCall").onclick = phoneCall;
}

function phoneCall() {
  location.href = "tel:80295536745";
}
