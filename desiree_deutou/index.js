


 var block = document.getElementsByClassName('element');

 Array.prototype.forEach.call(block, function(element){

 function color(){
 	element.style.backgroundColor = "red";
 }

 element.addEventListener("click",color);
});

 