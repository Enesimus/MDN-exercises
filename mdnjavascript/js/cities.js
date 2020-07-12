var list = document.querySelector(".cities");
//var nlist;
list.innerHTML = "";
var cities = ["lonDon", "sCoTlAnD", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];
for (var i = 0; i < cities.length; i++) {
  var input = cities[i];
  input = input.toLowerCase();
  var fl = input[0].toUpperCase();
  input = input.slice(1);
  var result = fl + input;
  var listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
  //nlist.pop(listItem);
}
