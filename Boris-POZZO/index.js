//div 1
var blue = document.getElementById("blue");
var blueOne = document.getElementById("blue-1");
var blueTwo = document.getElementById("blue-2");

var tableau= [blue, blueOne, blueTwo];

Array.prototype.forEach.call(tableau , function(box){
	box.onclick = function() {
		box.style.backgroundColor= 'red';
	}
})

