
//*********** Technique avec onclick *******************//


var element = document.getElementsByClassName("element");

Array.prototype.forEach.call(element, function(box) {

	box.onclick = function() {
    box.style.backgroundColor = "red";
}
});


//*********** Technique avec addEventListener ***********//


// var element = document.getElementsByClassName("element");

// Array.prototype.forEach.call(element, function(box) {

// 	function red() {
// 		console.log("ok");
// 		box.style.backgroundColor = "red";
// 	}

// 	box.addEventListener("click", red);
// });