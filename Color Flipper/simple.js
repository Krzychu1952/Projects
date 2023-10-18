var colors = ["red", "green", "blue", "white", "black"];
var button = document.getElementById("btn");
var color = document.getElementById('color');

button.addEventListener('click', function() {
  var random = getRandom();
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}