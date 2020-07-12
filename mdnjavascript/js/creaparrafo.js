function createParagraph() {
  var paragr = document.createElement("p");
  paragr.textContent = "Apretaste el botón!";
  document.body.appendChild(paragr);
}

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
