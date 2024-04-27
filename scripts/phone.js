let clicks = 0;

document.getElementById("phone").oninput = phoneInputFunc;
document.getElementById("phone").onclick = phoneClickFunc;
function phoneInputFunc() {
  event.preventDefault();
  console.log(Number(event.data));
  if (Number(event.data) == NaN) {
    console.log("not a number");
    document.getElementById("phone").value = document
      .getElementById("phone")
      .value.slice(0, document.getElementById("phone").value.length - 1);
  }
  /*if (
    document.getElementById("phone").value.length == 7 ||
    document.getElementById("phone").value.length == 11 ||
    document.getElementById("phone").value.length == 14
  ) {
    console.log("space");
    document.getElementById("phone").value += " ";
  }*/
}

function phoneClickFunc() {
  if (clicks == 0) {
    clicks++;
    document.getElementById("phone").value = "+375 ";
  }
}
