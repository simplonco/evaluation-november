

var allBoxes = document.getElementsByClassName('blue');

Array.prototype.forEach.call ( allBoxes ,function(box){
  box.onclick = function() {
    box.style.backgroundColor = "red";
}})
