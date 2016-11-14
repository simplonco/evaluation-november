


// var element = document.getElementById("element");
// var element = document.getElementById("element")
// var element = document.getElementById("element")

var element = document.getElementsByClassName("element");

// var element = ["element","element","element"];

Array.prototype.forEach.call ( element ,function(box){
  box.onclick = function() {
    box.style.backgroundColor = "red";
}})