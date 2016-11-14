


	var block = document.getElementsByClassName('premier');

	Array.prototype.forEach.call(block, function(premier){

		function color(){ 
			premier.style.backgroundColor = "red";
		}
		premier.addEventListener("click",color);
	});



