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

  window.scrollTo(0, 0);
}

if (document.getElementById("link") != null) {
  document.getElementById("link").onclick = postFunc;
}

if (document.getElementById("post") != null) {
  document.getElementById("post").onclick = postFunc;
}

if (document.getElementById("adr") != null) {
  document.getElementById("adr").onclick = adrFunc;
}

if (document.getElementById("scrollBottom") != null) {
  document.getElementById("scrollBottom").onclick = scrollBottom;
}

function scrollBottom() {
  let i = document.getElementById("fou").offsetTop - 135;
  window.scrollTo(0, i);
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

function adrFunc() {
  location.href =
    "https://yandex.by/maps/157/minsk/house/Zk4YcwJiSkIFQFtpfXVxcXtkYw==/?indoorLevel=1&ll=27.552372%2C53.900778&utm_medium=mapframe&utm_source=maps&z=16.61";
}
