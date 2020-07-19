function slideRight() {
  var css1 = document.querySelector("#btn-1");
  css1.classList.add("right");
  setTimeout(function () {
    css1.classList.remove("right");
  }, 1000);
}
function slideLeft() {
  var css1 = document.querySelector("#btn-2");
  css1.classList.add("left");
  setTimeout(function () {
    css1.classList.remove("left");
  }, 1000);
}

function slideUp() {
  var css1 = document.querySelector("#btn-3");
  css1.classList.add("up");
  setTimeout(function () {
    css1.classList.remove("up");
  }, 1000);
}

function slideDown() {
  var css1 = document.querySelector("#btn-4");
  css1.classList.add("down");
  setTimeout(function () {
    css1.classList.remove("down");
  }, 1000);
}

function rotY() {
  var css1 = document.querySelector("#btn-5");
  css1.classList.add("rotY");
  setTimeout(function () {
    css1.classList.remove("rotY");
  }, 3000);
}
function rotX() {
  var css1 = document.querySelector("#btn-6");
  css1.classList.add("rotX");
  setTimeout(function () {
    css1.classList.remove("rotX");
  }, 3000);
}
