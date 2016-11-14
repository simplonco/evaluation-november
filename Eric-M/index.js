
var box = document.getElementsByClassName('box');

box[0].onclick = function (){
	box[0].style.backgroundColor = "red";
}

box[1].onclick = function (){
	box[1].style.backgroundColor = "red";
}

box[2].onclick = function (){
	box[2].style.backgroundColor = "red";
}

/* faire avec une boucle
	for(var i=0; i < box.length; i++){
 	box[i].onclick = function () {
 		box[i].style.backgroundColor = "red";
}
}
 */

